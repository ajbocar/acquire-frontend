import { defineStore } from 'pinia'

export const useMyAuthStore = defineStore({
  id: 'myAuthStore',
  state: () => {
    return { token: false }
  },
  actions: {
    setToken(tokenString: string) {
      this.token = tokenString
    },
    removeToken() {
      this.token = false
    }
  },
})
