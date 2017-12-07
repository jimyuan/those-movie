import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    movieData: []
  },
  mutations: {
    fetchData (state, data) {
      state.movieData = data
    }
  }
})
