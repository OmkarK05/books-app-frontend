export default {
  namespaced: true,
  state: {
    books : [
          {name : 'Long Bright River: A Novel', author: 'LIZ MOORE', image: 'https://hips.hearstapps.com/vader-prod' +
                '.s3.amazonaws.com/1578603226-51dNGcQl4HL.jpg?crop=1xw:0.993xh;center,top&resize=480:*', id:'book1',
                 saved : false
          },
          {name : 'A Long Petal of the Sea: A Novel', author: 'ISABEL ALLENDE', image: 'https://hips.hearstapps.com' +
                '/vader-prod.s3.amazonaws.com/1578603226-51dNGcQl4HL.jpg?crop=1xw:0.993xh;center,top&resize=480:*',
                id:'book2', saved : false
          },
          {name : 'To Kill a Mockingbird', author: 'Harper Lee', image: 'https://hips.hearstapps.com/vader-prod' +
                '.s3.amazonaws.com/1578603226-51dNGcQl4HL.jpg?crop=1xw:0.993xh;center,top&resize=480:*', id:'book3',
                 saved : false
          },
          {name : 'The Lord of the Rings', author: 'LIZ MOORE', image: 'https://hips.hearstapps.com/vader-prod' +
                '.s3.amazonaws.com/1578603226-51dNGcQl4HL.jpg?crop=1xw:0.993xh;center,top&resize=480:*', id:'book4',
                 saved : false
          },
          {name : ' Harry Potter and the Philosopher’s Stone', author: 'J.K. Rowling', image: 'https://hips.hearstapp' +
                's.com/vader-prod.s3.amazonaws.com/1578603226-51dNGcQl4HL.jpg?crop=1xw:0.993xh;center,top&resize=480:*'
                 , id:'book5', saved : false
          }

      ]
  },
    getters:{
      savedBooks : function(state){
       let savedBooks = state.books.map((el, i) => {
         return el.saved === true;
         })
        return savedBooks;
      }
    },

    mutations : {
       SAVE_BOOK : function (state, payload){
         state.books.forEach((el, i) => {
           payload.id === el.id ? el.saved = true : null;
         })
       }

    },

    actions : {
      savedBook : function ({commit, state}, payload){
        commit('SAVE_BOOK', payload);
        console.log(payload);

      }
    }
}