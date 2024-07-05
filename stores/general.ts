type GeneralStoreState = {
  drawer: boolean
}

const initialState = (): GeneralStoreState => ({
  drawer: true,
})

export const useGeneralStore = defineStore({
  id: 'general-store',
  state: initialState,
  actions: {},
})
