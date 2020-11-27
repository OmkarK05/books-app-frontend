<template>
  <div>
    <vs-row>
      <div>Movies</div>
    </vs-row>
    <!--    TODO: send 'type' prop to AppCard -->
    <app-card
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
  methods: {
    // TODO: move saveMovie action to mixin saveItem.js
    ...mapActions({
      save : 'movie/saveMovie'
    })
  }
};
</script>

<style scoped>

</style>