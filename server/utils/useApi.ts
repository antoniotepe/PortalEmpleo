const runtimeConfig = useRuntimeConfig()

export const useApi = $fetch.create({
  baseURL: runtimeConfig.apiUrl,
})
