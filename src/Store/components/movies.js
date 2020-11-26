export default {
  namespaced: true,


  state: {
    movies: [],
  },


  getters: {
    savedMovies: function (state) {
      return state['movies'].filter((movie) => movie['saved']);
    },

    getAllMovies: function (state) {
      return state.movies;
    }
  },


  mutations: {

    SAVE_MOVIE: function (state, id) {
      state['movies'].find((movie) => movie.id === id ? movie['saved'] = true : null);
    },

    UNSAVE_MOVIE: function (state, id) {
      state['movies'].find((movie) => movie.id === id ? movie['saved'] = false : null);
    },

    SET_MOVIES: function (state, movies) {
      state.movies = movies;
    }
  },


  actions: {

    saveMovie: function ({ commit, state }, id) {
      commit('SAVE_MOVIE', id);
    },

    unsaveMovie: function ({ commit, state }, id) {
      commit('UNSAVE_MOVIE', id);
    },

    setMovies: function ({ commit, state }, movies) {
      commit('SET_MOVIES', movies);
    }
  }
};