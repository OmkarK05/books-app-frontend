import { mapActions } from 'vuex';

export default {
  data: function () {
    return {
      //TODO create a method getFilters which accepts list of books/movies and return a list of filters based on
      // genres
      //TODO remove activatedFilters
      activatedFilters: [],
    //  TODO save filters like so
    //   filters: [
    //     {
    //       name: 'Animation',
    //       value: false,
    //     }
    //   ]
    };
  },
  methods: {
    ...mapActions({
      saveBook: 'book/saveBook',
      saveMovie: 'movie/saveMovie'
    }),
    handleSave: function (id, type) {
      type === 'movie' ? this.saveMovie(id) : this.saveBook(id);
    },

    // TODO: remove activeFilters
    activeFilters: function (filters) {
      this.activatedFilters = filters;
    },

    // TODO send list of filters to this method and use that to filter out the selected movies/books
    filterData: function (data, filters) {
      // TODO simplify the if condtion to ! filters.length
      if (this.activatedFilters.length !== 0) {
        // TODO remove unused index i
        return data.filter((item, i) => {
          return this.activatedFilters.every(filter => item.options.includes(filter));  // o(n)^2
        });
      } else {
        return data;
      }
    },
  },
};
