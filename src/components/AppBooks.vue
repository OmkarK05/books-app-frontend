<template>
  <div>
    <vs-row
      vs-w="12"
      vs-justify="space-between"
      vs-align="center"
    >
      Books
    </vs-row>
    <app-card
      :card-data="books"
      @handleAction="handleSave"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import AppCard from './AppCard';
import saveItem from '../mixins/saveItem';

export default {
  name: 'AppBooks',
  components: {
    AppCard,
  },
  mixins:[saveItem],
  computed: {
    ...mapGetters({
      books: 'book/allBooks',
    })
  },
  mounted: function () {
    console.log(this.books);
  },
  
  methods: {
    ...mapActions({
      save: 'book/saveBook',
    })
  },
};
</script>

<style scoped>

</style>