import { z } from 'zod'

import { useApi } from '~/server/utils/useApi'

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export default defineEventHandler(async (event) => {
  const data = await readValidatedBody(event, schema.parse)

  return useApi('/api/v1/auth/login', {
    method: 'POST',
    body: data,
  })
})
