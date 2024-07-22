import { useApi } from '~/server/utils/useApi'

export default defineEventHandler(async (event) => {
  const data = await readBody(event)

  return useApi('/api/v1/auth/login', {
    method: 'POST',
    body: data,
  })
})
