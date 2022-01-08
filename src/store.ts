import { createStore } from 'vuex'

export const store = createStore({
  state: {
    area: 11,
    amedas: 11001,
  },
  mutations: {
      setArea(state: any, area: number) {
          state.area = area
      },
      setAmedas(state: any, amedas: number) {
          state.amedas = amedas
      },
  }
})