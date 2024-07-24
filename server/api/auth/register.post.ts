import { FetchError } from 'ofetch'

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
    return {
      status: 400,
      body: result.error,
    }
  }

  try {
    const response = await useApi<ServiceResponse>('/api/v1/auth/register', {
      method: 'POST',
      body: {
        email: result.data.email,
        password: result.data.password,
        password_confirmation: result.data.confirmPassword,
      },
    })

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
        data: error.response?._data?.message,
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
