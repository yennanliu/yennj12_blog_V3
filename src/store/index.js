import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    currentPost: null,
    loading: false,
    error: null
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    },
    SET_CURRENT_POST(state, post) {
      state.currentPost = post
    },
    SET_LOADING(state, loading) {
      state.loading = loading
    },
    SET_ERROR(state, error) {
      state.error = error
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      commit('SET_LOADING', true)
      try {
        // TODO: Implement API call to fetch posts
        const posts = []
        commit('SET_POSTS', posts)
      } catch (error) {
        commit('SET_ERROR', error.message)
      } finally {
        commit('SET_LOADING', false)
      }
    },
    async fetchPost({ commit }, id) {
      commit('SET_LOADING', true)
      try {
        // TODO: Implement API call to fetch single post
        const post = { id, title: 'Sample Post', content: 'This is a sample post content.' }
        commit('SET_CURRENT_POST', post)
      } catch (error) {
        commit('SET_ERROR', error.message)
      } finally {
        commit('SET_LOADING', false)
      }
    }
  },
  getters: {
    getPosts: state => state.posts,
    getCurrentPost: state => state.currentPost,
    isLoading: state => state.loading,
    getError: state => state.error
  }
}) 