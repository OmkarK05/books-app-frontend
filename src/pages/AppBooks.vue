<template>
  <div>
    <!--    TODO send a list of filters using getFilters from mixin -->
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
    //   TODO add a data property for list of available filters && call getFilters in mounted
    };
  },
  computed: {
    // TODO remove the use of filteredBooks computed prop & send availableFilter list to filterData method
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