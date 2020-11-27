<template>
  <div>
    <vs-row>
      <div>Movies</div>
    </vs-row>
    <app-card
      type="movie"
      :card-data="getMovies"
      @handleAction="handleSave"
    />
    <vs-row />
  </div>
</template>

<script>
import AppCard from './AppCard';
import { mapGetters, mapActions } from 'vuex';
import saveItem from '../mixins/saveItem';

export default {
  name: 'AppMovies',
  components: {
    AppCard,
  },
  mixins: [saveItem],
  computed: {
    ...mapGetters({
      getMovies: 'movie/getAllMovies'
    })
  },
};
</script>

<style scoped>

</style>