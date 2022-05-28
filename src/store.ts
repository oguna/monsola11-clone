import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      area: 11,
      amedas: 11001,
    }
  },
})