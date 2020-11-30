import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions({
      saveBook: 'book/saveBook',
      saveMovie: 'movie/saveMovie'
    }),
    handleSave: function (id, type) {
      type === 'movie' ? this.saveMovie(id) : this.saveBook(id);
    },

    activeFilters: function (filters) {
      console.log('filtered');
      if (filters.length !== 0) {
        this.newBooks = this.books.filter((book, i) => {
          return this.checkFilter(book.options, filters);  // o(n)^2
        });
      } else {
        this.newBooks = this.books;
      }
    },
    checkFilter: function (genres, filters) {
      return filters.every(filter => genres.includes(filter));
    },
  }

};