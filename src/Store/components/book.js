export default {
  namespaced: true,
  state: {
    books: [],
  },
  getters: {
    savedBooks: function (state) {
      return state['books'].filter((book) => book['saved']);
    },

    allBooks: function (state) {
      return state.books;
    }
  },

  mutations: {
    SAVE_BOOK: function (state, id) {
      state['books'].find((book) => book.id === id ? book['saved'] = true : null);
    },

    UNSAVE_BOOK: function (state, id) {
      state['books'].find((book) => book.id === id ? book['saved'] = false : null);
    },

    ADD_BOOK: function (state, book) {
      state['books'].push(book);
    },

    SET_BOOKS: function (state, books) {
      state.books = books;
    }
  },

  actions: {
    saveBook: function ({ commit, state }, id) {
      commit('SAVE_BOOK', id);
    },

    unsaveBook: function ({ commit, state }, id) {
      commit('UNSAVE_BOOK', id);
    },

    addBook: function ({ commit, state }, payload) {
      commit('ADD_BOOK', payload);
    },

    setBooks: function ({ commit, state }, books) {
      commit('SET_BOOKS', books);
    }
  }
};