import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    movieData: [],
    pageTitle: ''
  },
  mutations: {
    writeTitle (state, data) {
      state.pageTitle = data
    },
    fetchData (state, data) {
      state.movieData = data
    }
  }
})
