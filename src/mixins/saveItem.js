import { mapActions } from 'vuex';

export default {
  data: function () {
    return {
      activatedFilters: [],
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

    activeFilters: function (filters, type) {
      this.activatedFilters = filters;
    },

    filterData: function (data) {
      if (this.activatedFilters.length !== 0) {
        return data.filter((item, i) => {
          return this.activatedFilters.every(filter => item.options.includes(filter));  // o(n)^2
        });
      } else {
        return data;
      }
    },
  },
};
