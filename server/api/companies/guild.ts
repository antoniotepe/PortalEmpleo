import { useApi } from '~/server/utils/useApi'

export default defineEventHandler(async (event) => {
  return useApi(`http://192.168.10.63:8000/catalog-service/api/v1/catalog/parent/9`, {
    method: 'GET',
  })
})
