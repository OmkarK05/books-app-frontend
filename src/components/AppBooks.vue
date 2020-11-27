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
      type="book"
      :card-data="books"
      @handleAction="handleSave"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppCard from './AppCard';
import saveItem from '../mixins/saveItem';

export default {
  name: 'AppBooks',
  components: {
    AppCard,
  },
  mixins: [saveItem],
  computed: {
    ...mapGetters({
      books: 'book/allBooks',
    })
  },
};
</script>

<style scoped>

</style>