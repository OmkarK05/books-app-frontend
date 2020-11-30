<template>
  <div>
    <vs-row>
      <filter-bar
        type="movie"
        @activeFilters="activeFilters"
      />
    </vs-row>
    <vs-row>
      <div>Movies</div>
    </vs-row>
    <app-card
      type="movie"
      :card-data="filteredMovies"
      @handleAction="handleSave"
    />
    <vs-row />
  </div>
</template>

<script>
import AppCard from '../components/AppCard';
import { mapGetters, mapActions } from 'vuex';
import saveItem from '../mixins/saveItem';
import FilterBar from '../components/FilterBar';


export default {
  name: 'AppMovies',
  components: {
    AppCard,
    FilterBar,
  },
  mixins: [saveItem],
  computed: {
    filteredMovies: function () {
       return this.filterData(this.movies);
    },
    ...mapGetters({
      movies: 'movie/getAllMovies'
    }),

  },
};
</script>

<style scoped>

</style>