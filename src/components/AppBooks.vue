<template>
  <div>
    <vs-row
      vs-w="12"
      vs-justify="space-between"
      vs-align="center"
    >
      Books
    </vs-row>
    <filter-bar @activeFilters="activeFilters" />
    <app-card
      type="book"
      :card-data="newBooks"
      @handleAction="handleSave"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppCard from './AppCard';
import saveItem from '../mixins/saveItem';
import FilterBar from '@/components/FilterBar';

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
    ...mapGetters({
      books: 'book/allBooks',
    })
  },
  watch: {
    books : function (curr){
      this.newBooks = curr;
    }
  },
  updated () {
    this.activeFilters();
  },
};
</script>

<style scoped>

</style>