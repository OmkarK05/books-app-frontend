<template>
  <div>
    <vs-row
      vs-w="12"
      vs-justify="space-between"
      vs-align="center"
    >
      <vs-col
        vs-lg="6"
        vs-xs="12"
      >
        <div class="content-container">
          <div class="title">
            Daily Quote
          </div>
          <div class="quote">
            "I have always imagined that Paradise will be a kind of library"
          </div>
          <div class="author">
            -Jorge Luis Borges
          </div>
        </div>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col
        v-for="book in books"
        :key="book.id"
        vs-lg="4"
        vs-xs="12"
      >
        <div>
          <vs-card
            class="cardx"
            fixed-height
          >
            <div slot="header">
              <h3>
                {{ book.name }}
              </h3>
            </div>
            <div slot="media">
              <img 
                class="book-image"
                :src="book.image"
                alt="Book Image"
              >
            </div>
            <div>
              <span>
                {{ book.name }} dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </span>
            </div>
            <div slot="footer">
              <vs-row>
                --{{ book.author }}
              </vs-row>
              <vs-row vs-justify="flex-end">
                <vs-button
                  type="gradient"
                  color="danger"
                  icon="favorite"
                  @click="handleSaveBook(book.id)"
                />
                <vs-button
                  color="primary"
                  icon="turned_in_not"
                />
                <vs-button
                  color="rgb(230,230,230)"
                  color-text="rgb(50,50,50)"
                  icon="settings"
                />
              </vs-row>
            </div>
          </vs-card>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
// import gql from 'graphql-tag';
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    name: 'LandingPage',
    components: {},
    // data: function (){
    //   return{
    //     booksData: null,
    //   }
    // },
  computed: {
     books: function (){
       return this.$store.state.book.books;
     },

    ...mapGetters([
        'book/savedBooks',
    ])
  },
  mounted () {
      let formData = {
          name : 'Long Bright River: A Novel', author: 'LIZ MOORE', image: 'https://hips.hearstapps.com/vader-prod' +
                '.s3.amazonaws.com/1578603226-51dNGcQl4HL.jpg?crop=1xw:0.993xh;center,top&resize=480:*', id:'book1',
                 saved : false }
     this.$axios.post('https://book-app-cc225.firebaseio.com/books.json', formData).then((res) => console.log(res));
  },
  methods : {
      handleSaveBook : function (id){
        this.$store.dispatch('book/savedBook', {id});
      },
      ...mapActions([
          'book/savedBook',
      ])
   }
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
