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
      state.posts = posts;
      localStorage.setItem('blogPosts', JSON.stringify(posts)); // Save to localStorage
    },
    ADD_POST(state, post) { // New mutation
      state.posts.push(post);
      localStorage.setItem('blogPosts', JSON.stringify(state.posts)); // Update localStorage
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
      commit('SET_LOADING', true);
      try {
        let posts = JSON.parse(localStorage.getItem('blogPosts')); // Try localStorage
        if (!posts || posts.length === 0) {
          // TODO: Implement API call to fetch posts
          // For now, let's keep it as an empty array if nothing in localStorage
          // Or, you might want to initialize with some default posts here
          posts = []; 
          console.log('No posts in localStorage, fetched (empty) from source.');
        } else {
          console.log('Loaded posts from localStorage.');
        }
        commit('SET_POSTS', posts);
      } catch (error) {
        commit('SET_ERROR', error.message);
        // Fallback to empty array if localStorage parsing fails
        commit('SET_POSTS', []);
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async addPost({ commit }, postData) { // New action
      commit('SET_LOADING', true);
      try {
        // In a real app, you would send postData to an API here
        // For now, we'll just create a new post object
        const newPost = {
          id: Date.now().toString(), // Simple ID generation
          ...postData, // title, content
          date: new Date().toISOString(), // Standard date format
          // slug: postData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''), // More robust slug
          // excerpt, category, image can be added or derived as needed
        };
        commit('ADD_POST', newPost);
        // No explicit API call error handling for now as it's local
      } catch (error) {
        commit('SET_ERROR', error.message);
        // Re-throw or handle as needed if an API call were here
      } finally {
        commit('SET_LOADING', false);
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