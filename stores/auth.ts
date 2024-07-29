import { defineStore } from 'pinia'

type State = {
  access?: string
  refresh?: string
  user?: {
    id: number
    email: string
  }
}

type LoginServiceResponse = {
  access: string
  refresh: string
  user: {
    id: number
    email: string
  }
}

const initialState = (): State => ({})

export const useAuthStore = defineStore({
  id: 'auth',
  state: initialState,
  actions: {
    init() {
      const access = localStorage.getItem('access')

      if (access) {
        this.access = access
      }
    },

    async login(params: { email: string; password: string }) {
      const response = await $fetch<LoginServiceResponse>('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          email: params.email,
          password: params.password,
        },
      })

      this.access = response.access
      this.refresh = response.refresh
      this.user = response.user

      localStorage.setItem('access', response.access)
    },

    logout() {
      const init = initialState()

      this.access = init.access
      this.refresh = init.refresh
      this.user = init.user
    },
  },
})
