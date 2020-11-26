<template>
  <div class="container">
    <vs-row>
      <vs-col>
        <vs-row>
          Saved Books
        </vs-row>
        <app-card
          :card-data="savedBooks"
          @handleAction="handleUnsaveBook"
        />
      </vs-col>      
      <vs-col>
        <vs-row>
          Saved Movies
        </vs-row>
        <app-card
          :card-data="savedMovies"
          @handleAction="handleUnsaveMovie"
        />
      </vs-col>
    </vs-row>
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
        savedBooks : 'book/savedBooks',
        savedMovies : 'movie/savedMovies'
      })
    },
   methods:{
      handleUnsaveBook : function (id){
        this.unsaveBook(id);
      },

     handleUnsaveMovie : function (id){
         this.unsaveMovie(id);
     },

      ...mapActions({
         unsaveBook : 'book/unsaveBook',
         unsaveMovie : 'movie/unsaveMovie'
      })
   }

}
</script>

<style lang="scss" scoped>

</style>
