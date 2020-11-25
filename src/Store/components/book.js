export default {
  namespaced: true,
  state: {
    books: [],
  },
  getters: {
    savedBooks: function (state) {
      // TODO: rename 'el' to book, remove index i from filter and directly use book['saved'] without function {}
      let savedBooks = state.books.filter((el, i) => {
        return el.saved === true;
      });
      return savedBooks;
    },

    // TODO: check why this is unused, if necessary,
    allBooks: function (state) {
      return state.books;
    }
  },

  mutations: {
    SAVE_BOOK: function (state, payload) {
      //TODO: replace map with array method find
      state.books.map((el, i) => {
        payload.id === el.id ? el.saved = true : null;
      });
    },
    REMOVE_BOOK: function (state, payload) {
      //TODO: replace map with array method find
      state.books.map((el, i) => {
        payload.id === el.id ? el.saved = false : null;
      });
    },
    // TODO: rename payload with book
    ADD_BOOK: function (state, payload) {
      // TODO: use a simply push method to add book to the state['books']
      state.books = [...state.books, { ...payload }];
    },

    // TODO: rename payload with books, & remove spread operator to assign list of books to state['books']
    GET_BOOKS: function (state, payload) {
      state.books = [...payload];
    }
  },

  actions: {
    // TODO: rename savedBook with saveBook
    savedBook: function ({ commit, state }, payload) {
      commit('SAVE_BOOK', payload);
      console.log(payload);
    },

    // TODO: rename removeBook appropriately
    removeBook: function ({ commit, state }, payload) {
      commit('REMOVE_BOOK', payload);
    },

    addBook: function ({ commit, state }, payload) {
      commit('ADD_BOOK', payload);
    },

    // TODO: rename getBooks to setBooks, rename payload with books
    getBooks: function ({ commit, state }, payload) {
      commit('GET_BOOKS', payload);
    }
  }
};