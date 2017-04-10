import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    authUser: {},
    messages: []
  },
  getters: {
    getAuthUser(state) {
      return state.authUser;
    }
  },
  mutations: {
    setAuthUser(state, user) {
      return state.authUser = user;
    }
  }
})
