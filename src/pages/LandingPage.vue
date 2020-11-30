<template>
  <div>
    <!--  TODO: Use movies and books AppCard from this component directly, remove or delete app-books & app-movies -->
    <vs-row>
      <app-books />
    </vs-row>

    <vs-row>
      <app-movies />
    </vs-row>
  </div>
</template>

<script>
import AppMovies from '../components/AppMovies';
import AppBooks from '../components/AppBooks';


export default {
    name: 'LandingPage',
    components: {AppMovies, AppBooks},
}
</script>

<style lang="scss" scoped>

.book-image{
  width: 100px;
}

.content-container{
   padding: 15px;
   margin: 12px;
   border-radius: 15px;
   box-shadow: 0px 0px 8px rgb(204, 203, 203);

   .title{
       font-size: 14px;
       background: rgb(52, 179, 238);
       width: fit-content;
       padding: 2px 5px;
       color: #ffffff;
       border-radius: 5px;
   }

   .quote{
       font-size: 32px;
       padding: 5px;
   }
   .author{
       padding: 0px 12px;
       font-style: italic;
   }
}

</style>
