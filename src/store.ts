import { defineStore } from 'pinia'

export const useStoreFactory = () => {
  return defineStore({
    id: 'store',
    state: () => ({
      password: 'default'
    }),
    actions: {
      async printPassword() {
        try {
          console.log('in login', this.password)
        } catch (err) {
          console.log(err)
        }
      },
      async changePassword() {
        try {
          this.password = 'changed'
          console.log('this.password in changePassword', this.password)
        } catch (err) {
          console.log(err)
        }
      }
    }
  })
}
