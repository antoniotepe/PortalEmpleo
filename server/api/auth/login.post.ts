import { FetchError } from 'ofetch'

import { useApi } from '~/server/utils/useApi'
import { LoginSchema } from '~/validators/schemas/login'

type ServiceResponse = {
  access_token: string
  fresh_token: string
  user: {
    id: number
    email: string
  }
}

type Response = {
  access: string
  refresh: string
  user: {
    id: number
    email: string
  }
}

export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, LoginSchema.safeParse)

  if (!result.success) {
    throw createError({
      status: 400,
      statusMessage: 'Validation Failure',
      data: result.error,
    })
  }

  try {
    const response = await useApi<ServiceResponse>('/api/v1/auth/login', {
      method: 'POST',
      body: {
        email: result.data.email,
        password: result.data.password,
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
