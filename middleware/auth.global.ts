export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore()

  if (to.path.includes('/auth') && auth.access) {
    return navigateTo('/')
  }

  if (!to.path.includes('/auth') && !auth.access) {
    return navigateTo('/auth/login')
  }
})
