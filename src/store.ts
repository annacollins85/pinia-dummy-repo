import { defineStore } from 'pinia'

export const useStoreFactory = () => {
  return defineStore({
    id: 'store',
    state: () => ({
      tokenInformation: 'hello',
      authApiState: false
    }),
    actions: {
      async login() {
        try {
          console.log('in login', this.tokenInformation)
          this.authApiState = true
        } catch (err) {
          console.log(err)
        }
      },
      async checkSupervisorPassword() {
        try {
          this.tokenInformation = 'another'
          console.log('in check', this.tokenInformation)
          console.log('auth in check', this.authApiState)
        } catch (err) {
          console.log(err)
        }
      }
    }
  })
}
