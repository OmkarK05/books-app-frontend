export default {
  namespaced: true,
  state: {
    books : [],
  },
    getters:{
      savedBooks : function(state){
       let savedBooks = state.books.filter((el, i) => {
         return el.saved === true;
         })
        return savedBooks;
      },

      allBooks : function (state){
        return state.books;
      }
    },

    mutations : {
       SAVE_BOOK : function (state, payload){
          state.books.map((el, i) => {
           payload.id === el.id ? el.saved = true : null;
         })
       },
      REMOVE_BOOK : function (state, payload){
         state.books.map((el, i) => {
           payload.id === el.id ? el.saved = false : null;
         })
      },
      ADD_BOOK : function (state, payload){
         state.books = [...state.books , {...payload}];
      },

      GET_BOOKS : function (state,payload){
         state.books = [...payload];
      }
    },

    actions : {
      savedBook : function ({commit, state}, payload){
        commit('SAVE_BOOK', payload);
        console.log(payload);
      },

      removeBook : function ({commit, state}, payload){
        commit('REMOVE_BOOK', payload);
      },

      addBook : function ({commit, state}, payload){
        commit('ADD_BOOK', payload);
      },

      getBooks : function ({commit, state}, payload){
        commit('GET_BOOKS', payload)
      }
    }
}