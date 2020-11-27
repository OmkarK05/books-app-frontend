import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions({
      saveBook: 'book/saveBook',
      saveMovie : 'movie/saveMovie'
    }),
    handleSave: function (id, type) {
      type === 'movie' ? this.saveMovie(id) : this.saveBook(id);
    },
  }
};