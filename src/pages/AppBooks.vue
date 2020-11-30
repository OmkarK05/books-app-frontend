<template>
  <div>
    <filter-bar
      @handle-change-filters="activeFilters"
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
      :card-data="filteredBooks"
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
    };
  },
  computed: {
    filteredBooks: function () {
      return this.filterData(this.books);
    },
    ...mapGetters({
      books: 'book/allBooks',
    })
  },
};
</script>

<style scoped>

</style>