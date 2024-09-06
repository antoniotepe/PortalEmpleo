export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore()
  auth.init()

  if (to.path.includes('/auth') ) {
    return navigateTo('/')
  }

  // if (!to.path.includes('/auth') && !auth.access) {
  //   return navigateTo('/auth/login')
  // }
})
