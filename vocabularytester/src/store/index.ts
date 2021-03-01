import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    settings: { animatedBackground: true },
    savedLists: [],
    currentList: [],
  },
  mutations: {
    initialiseStore(state) {
      console.log("initialiseStore");
      try {
        // retrieve savedLists from localStorage
        let savedLists: any = localStorage.getItem("savedLists");
        savedLists = JSON.parse(savedLists);
        console.log(savedLists, "savedLists", localStorage);

        if (savedLists) {
          state.savedLists = savedLists;
        } else {
          savedLists = JSON.stringify([]);
          localStorage.setItem("savedLists", savedLists);
        }
      } catch (error) {
        console.log("error by retrieving savedLists from localStorage", error);
      }

      try {
        // retrieve currentList from localStorage
        let savedLists: any = localStorage.getItem("currentList");
        savedLists = JSON.parse(savedLists);
        console.log(savedLists, "currentList", localStorage);

        if (savedLists) {
          state.savedLists = savedLists;
        } else {
          savedLists = JSON.stringify([]);
          localStorage.setItem("currentList", savedLists);
        }
      } catch (error) {
        console.log("error by retrieving currentList from localStorage", error);
      }
    },

    setAnimatedBackground(state, stateAnimatedBackground) {
      state.settings.animatedBackground = stateAnimatedBackground;
    },
    addSavedLists(state, data) {
      console.log("addsavedlists", data);
      let lists: any = state.savedLists;
      lists = lists.concat([data]);
      localStorage.setItem("savedLists", JSON.stringify(lists));
      state.savedLists = lists;
    },
    addCurrentListToSavedLists(state, name = '') {
      console.log('addCurrentListToSavedLists', name)
      if(name === ''){
        name = 'Current List' + String(state.savedLists.length)
      }

      let lists: any = state.savedLists;
      lists = lists.concat([{ name: name, list: state.currentList }]);
      localStorage.setItem("savedLists", JSON.stringify(lists));
      state.savedLists = lists;
    },
    setSavedLists(state, list: any) {
      localStorage.setItem("savedLists", JSON.stringify(list));
      state.savedLists = list;
    },
    setCurrentList(state, list) {
      localStorage.setItem("currentList", JSON.stringify(list));
      state.currentList = list;
    },
  },
  getters: {
    savedLists(state) {
      return state.savedLists;
    },
    currentList(state) {
      return state.currentList;
    },
  },
  actions: {},
  modules: {},
});
