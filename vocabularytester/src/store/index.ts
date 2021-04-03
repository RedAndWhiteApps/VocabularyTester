import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    settings: { animatedBackground: true },
    savedLists: [],
    currentList: [],
    previousList: [],
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

        state.savedLists = savedLists;
      } catch (error) {
        console.log("error by retrieving savedLists from localStorage", error);
      }

      try {
        // retrieve currentList from localStorage
        let currentList: any = localStorage.getItem("currentList");
        currentList = JSON.parse(currentList);
        console.log(currentList, "currentList", localStorage);

        if (currentList) {
          state.currentList = currentList;
        } else {
          currentList = JSON.stringify([]);
          localStorage.setItem("currentList", currentList);
        }
      } catch (error) {
        console.log("error by retrieving currentList from localStorage", error);
      }

      try {
        // retrieve previousList from localStorage
        let previousList: any = localStorage.getItem("previousList");
        previousList = JSON.parse(previousList);
        console.log(previousList, "previousList", localStorage);

        if (previousList) {
          state.previousList = previousList;
        } else {
          previousList = JSON.stringify([]);
          localStorage.setItem("previousList", previousList);
        }
      } catch (error) {
        console.log("error by retrieving previousList from localStorage", error);
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
    addCurrentListToSavedLists(state, name = "") {
      console.log("addCurrentListToSavedLists", name);
      if (name === "" || name === null) {
        const id = state.savedLists.length;
        console.log("CurrentList Name", name, id);
        name = "Current List " + id;
        console.log("CurrentList Name", name, id);
      }
      console.log("CurrentList Name 2: ", name);
      let lists: any = state.savedLists;
      lists.push({ name: name, list: state.currentList });
      console.log("lists", lists);
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
    currentListFinished(state) {
      localStorage.setItem("previousList", JSON.stringify(state.currentList));
      state.previousList = state.currentList;

      localStorage.setItem("currentList", JSON.stringify([]));
      state.currentList = [];
    },
  },
  getters: {
    savedLists(state) {
      return state.savedLists;
    },
    currentList(state) {
      return state.currentList;
    },
    previousList(state){
      return state.previousList;
    }
  },
  actions: {},
  modules: {},
});
