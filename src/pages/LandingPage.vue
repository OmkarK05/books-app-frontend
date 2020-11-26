<template>
  <div>
    <vs-row>
      <app-books />
    </vs-row>

    <vs-row>
      <app-movies />
    </vs-row>
  </div>
</template>

<script>
// import gql from 'graphql-tag';
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
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

    // apollo:{
    //     //vue apollo options here
    //   booksData : {
    //     query: gql`query{
    //      books{
    //       name
    //      }
    //     }`,
    //     update: result => {
    //       console.log(result);
    //       return result.books;
    //     },
    //   },
    // },
    // data: function (){
    //   return{
    //     booksData: null,
    //   }
    // },
<!--<vs-card&ndash;&gt;-->
<!--            class="cardx"-->
<!--            fixed-height-->
<!--          >-->
<!--            <div slot="header">-->
<!--              <h3>-->
<!--                {{ book.name }}-->
<!--              </h3>-->
<!--            </div>-->
<!--            <div slot="media">-->
<!--              <img-->
<!--                class="book-image"-->
<!--                :src="book.image"-->
<!--                alt="Book Image"-->
<!--              >-->
<!--            </div>-->
<!--            <div>-->
<!--              <span>-->
<!--              </span>-->
<!--            </div>-->
<!--            <div slot="footer">-->
<!--              <vs-row>-->
<!--                &#45;&#45;{{ book.author }}-->
<!--              </vs-row>-->
<!--              <vs-row vs-justify="flex-end">-->
<!--                <vs-button-->
<!--                  type="gradient"-->
<!--                  color="danger"-->
<!--                  icon="favorite"-->
<!--                  @click="handleSaveBook(book.id)"-->
<!--                />-->
<!--                <vs-button-->
<!--                  color="primary"-->
<!--                  icon="turned_in_not"-->
<!--                />-->
<!--                <vs-button-->
<!--                  color="rgb(230,230,230)"-->
<!--                  color-text="rgb(50,50,50)"-->
<!--                  icon="settings"-->
<!--                />-->
<!--              </vs-row>&ndash;&gt;-->
<!--            </div>&ndash;&gt;-->
<!--          </vs-card>-->