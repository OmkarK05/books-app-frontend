<template>
  <div>
    <!--    TODO send a list of filters using getFilters from mixin -->
    <filter-bar
      :available-filters="getFilters(books)"
      @handle-filters-change="setChangedFilters"
    />
    <vs-row
      vs-w="12"
      vs-justify="space-between"
      vs-align="center"
    >
      Books
    </vs-row>
    <app-card
      type="book"
      :card-data="items"
      @handle-action="handleSave"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppCard from '../components/AppCard';
import saveItem from '../mixins/saveItem';
import FilterBar from '../components/FilterBar';

export default {
  name: 'AppBooks',
  components: {
    AppCard,
    FilterBar,
  },
  mixins: [saveItem],
  data: function () {
    return {
      newBooks: [],
      //TODO add a data property for  of available filters && call getFilters in mounted
    };
  },
  computed: {
    ...mapGetters({
      books: 'book/allBooks',
    })
  },
  watch: {
    books : function (books){
       this.items = books;
    }
  },
};
</script>

<style scoped>

</style>