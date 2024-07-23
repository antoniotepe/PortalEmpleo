import { $fetch } from 'ofetch'

const runtimeConfig = useRuntimeConfig()

export const useApi = $fetch.create({
  baseURL: runtimeConfig.apiUrl,
})
