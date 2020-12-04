import { mapActions } from 'vuex';

export default {
  data: function () {
    return {
      //TODO create a method getFilters which accepts list of books/movies and return a list of filters based on
      // genres
      //TODO remove activatedFilters
      filters: [],
      items: [],
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

    setChangedFilters: function (changedFilters, filter) {

      this.filters = changedFilters;

      console.log(changedFilters);
      console.log(changedFilters[0].isActive);
      
      // this.filters.map((filter) => filter.name === filter ? !filter.isActive : null);

      console.log(this.filters[0].isActive);
      console.log(changedFilters[0].isActive);

      let ifActiveFilters = false;
      for (let i = 0; i < this.filters.length; i++) {
        if (this.filters[i]['isActive']) {
          ifActiveFilters = true;
        }
      }


      // this.filters = changedFilters;
      //
      // let checkFilters = (item) => {
      //   changedFilters.forEach((filter) => {
      //     if (filter.isActive) {
      //       console.log(filter.isActive);
      //       if (item.options.includes(filter.name)) {
      //         return true;
      //       }
      //     }
      //
      //   });
      // };
      //
      // if (! ifActiveFilters) {
      //   this.items = this.books;
      //   return;
      // } else {
      //   this.items = this.items.filter((item) => {
      //     console.log(checkFilters(item));
      //   });
      // }


    },

    getFilters: function (data) {
      let genreArray = [];
      if (! this.filters.length) {
        data.map(item => {
          item.options.forEach((option) => {
            if (! genreArray.includes(option)) {
              genreArray.push(option);
            }
          });
        });

        let newFilters = genreArray.map((genre) => {
          return {
            name: genre,
            isActive: false
          };
        });

        this.filters = [...newFilters];
        return [...newFilters];

      } else {
        console.log('data filters returned');
        return this.filters;
      }
    }
  },
};
