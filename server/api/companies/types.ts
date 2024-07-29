import { useApi } from '~/server/utils/useApi'

export default defineEventHandler(async (event) => {
  return useApi(`/catalog-service/api/v1/catalog/parent/5`, {
    method: 'GET',
  })
})
