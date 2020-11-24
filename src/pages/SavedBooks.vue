<template>
  <div class="container">
    <vs-row >
      Saved Books
    </vs-row>
    <app-card :card-data="savedBook" />
  </div>
</template>
s
<script>

import {mapGetters} from 'vuex';
import AppCard from '../components/AppCard'

export default {
    name : 'SavedBooks',
    components: {
      AppCard,
    },
    data : function (){
      return{
        savedBook: null
      }
    },
    mounted () {
      this.savedBook = [...this.savedBooks];
    },
  computed: {
      ...mapGetters({
        savedBooks : 'book/savedBooks'
      })
    }

}
</script>

<style lang="scss" scoped>

</style>
