import { createStore } from 'vuex'

export const store = createStore({
  state: {
    amedas: 11001
  },
  mutations: {
      setAmedas(state: any, amedas: number) {
          state.amedas = amedas
      }
  }
})