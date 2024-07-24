import { FetchError } from 'ofetch'

import { useApi } from '~/server/utils/useApi'
import { RegisterSchema } from '~/validators/schemas/register'

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
    return await useApi<Response>('/api/v1/auth/register', {
      method: 'POST',
      body: {
        email: result.data.email,
        password: result.data.password,
        password_confirmation: result.data.confirmPassword,
      },
    })
  } catch (error) {
    if (error instanceof FetchError) {
      return {
        status: error.response?.status || 500,
        body: {
          message: error.response?.statusText || 'Internal Server Error',
        },
      }
    }

    return {
      status: 500,
      body: {
        message: 'Internal Server Error',
      },
    }
  }
})
