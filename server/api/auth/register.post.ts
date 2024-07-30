import { FetchError } from 'ofetch'
import type { ZodError } from 'zod'
import { useApi } from '~/server/utils/useApi'
import { RegisterSchema } from '~/validators/schemas/register'

type ServiceResponse = {
  access_token: string
  fresh_token: string
  user: {
    id: number
    email: string
  }
}

//response of the caste api for consumption within the front end
type Response = {
  access: string
  refresh: string
  expires_in: number
  user: {
    id: number
    email: string
  }
}

export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, RegisterSchema.safeParse)
  if (!result.success) {
    const zodErrors = result.error as ZodError
    const errorMessages = zodErrors.errors.map((err) => err.message).join(', ')

    throw createError({
      status: 400,
      statusMessage: 'Validation Failure',
      message: errorMessages,
    })
  }

  try {
    const response = await useApi<ServiceResponse>('/auth-t-service/api/v1/auth/register', {
      method: 'POST',
      body: {
        email: result.data.email,
        password: result.data.password,
        password_confirmation: result.data.confirmPassword,
      },
    })

    if (!response.access_token) {
      throw createError({
        status: 400,
        statusMessage: 'Validation Failure',
        data: result.error,
      })
    }

    return {
      access: response.access_token,
      refresh: response.fresh_token,
      user: response.user,
    } as Response
  } catch (error) {
    if (error instanceof FetchError) {
      throw createError({
        status: error.response?.status || 500,
        statusMessage: error.response?.statusText || 'Internal Server Error',
        message: error.response?._data?.message,
      })
    }

    return {
      status: 500,
      body: {
        message: 'Internal Server Error',
      },
    }
  }
})
