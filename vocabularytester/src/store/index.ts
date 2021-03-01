import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    settings: {animatedBackground: true},
  },
  mutations: {
    setAnimatedBackground (state, stateAnimatedBackground) {
      // mutate state
      console.log('setAnimatedBackground', stateAnimatedBackground)
      state.settings.animatedBackground = stateAnimatedBackground
    }
  },
  actions: {
  },
  modules: {
  }
})
