import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    settings: { animatedBackground: true },
    savedLists: [],
  },
  mutations: {
    initialiseStore(state) {
      console.log('initialiseStore')
      let savedLists: any = localStorage.getItem('savedLists');
      savedLists = JSON.parse(savedLists);
      console.log(savedLists, 'savedLists', localStorage)

      if (savedLists) {
        state.savedLists = savedLists;
      } else{
        savedLists = JSON.stringify([])
        localStorage.setItem('savedLists', savedLists);
      }
    },

    setAnimatedBackground(state, stateAnimatedBackground) {
      state.settings.animatedBackground = stateAnimatedBackground;
    },
    addSavedLists(state, item) {
      console.log("addsavedlists", item);
    },
    setSavedLists(state, list: any) {
      localStorage.setItem('savedLists', list);
      state.savedLists = list;
    },
  },
  getters: {
    savedLists(state) {
      return state.savedLists;
    },
  },
  actions: {

  },
  modules: {},
});
