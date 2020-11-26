<template>
  <div class="container">
    <vs-row>
      Saved Books
    </vs-row>
    <app-card
      :card-data="savedBooks"
      @handleAction="handleRemoveBook"
    />
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex';
import AppCard from '../components/AppCard'

export default {
    name : 'SavedBooks',
    components: {
      AppCard,
    },
    data : function (){
      return{
      }
    },

  computed: {
      ...mapGetters({
        savedBooks : 'book/savedBooks'
      })
    },
   methods:{
      handleRemoveBook : function (id){
        this.unsaveBook(id);
      },

      ...mapActions({
         unsaveBook : 'book/unsaveBook'
      })
   }

}
</script>

<style lang="scss" scoped>

</style>
