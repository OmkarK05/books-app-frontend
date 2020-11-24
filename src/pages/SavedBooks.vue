<template>
  <div class="container">
    <vs-row >
      Saved Books
    </vs-row>
    <app-card :card-data="savedBooks" @handleSave="handleRemoveBook" />
  </div>
</template>
s
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
        savedBook: null
      }
    },

  computed: {
      ...mapGetters({
        savedBooks : 'book/savedBooks'
      })
    },
   methods:{
      handleRemoveBook : function (id){
        this.removeBook({id});
      },

      ...mapActions({
         removeBook : 'book/removeBook'
      })
   }

}
</script>

<style lang="scss" scoped>

</style>
