export const useDrawerStore = defineStore({
  id: 'drawer',
  state: () => ({ visible: false }),
  actions: {
    toggle() {
      this.visible = !this.visible
    },
  },
})
