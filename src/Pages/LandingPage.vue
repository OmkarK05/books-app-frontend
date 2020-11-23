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
      <vs-col
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
                Hello world !
              </h3>
            </div>
            <div slot="media">
              <img>
            </div>
            <div>
              <span 
                v-if="$apollo.queries.hello.loading"
              >{{ hello }} dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </span>
            </div>
            <div slot="footer">
              <vs-row vs-justify="flex-end">
                <vs-button
                  type="gradient"
                  color="danger"
                  icon="favorite"
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
import gql from 'graphql-tag';
export default {
    name: 'LandingPage',
    components: {},
    data: function (){
      return{
        booksData: null,
      }
    },
    apollo:{
        //vue apollo options here
      booksData : {
        query: gql`query{
         books{
          name
         }
        }`,
        update: result => {
          console.log(result);
          return result.books;
        },
      },
      // ping: {
      //     query : gql`query PingMessage($message: String!){
      //       ping(message: $message)
      //     }`,
      //
      //   variables: {
      //       message : 'hi'
      //   }
      // },
      //
      // //Reactive query
      // featuredTag: {
      //   query(){
      //     if(this.showTag === 'random'){
      //       return gql`{
      //        randomTag{
      //         id
      //         label
      //         type
      //        }
      //       }`
      //     }
      //   }
      // }
    },
  // methods : {
  //     updateName(){
  //       this.$apollo.mutate({
  //         mutation: gql`
  //          mutation($name : String!){
  //             updateAlligatorName(name : $name)
  //          }
  //         `,
  //         variables : {name : this.temporaryName}
  //       }).then(res => {
  //         console.log(res);
  //       })
  //     }
  // }
}
</script>

<style lang="scss" scoped>

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
       font-style: bold;
       padding: 5px;
   }
   .author{
       padding: 0px 12px;
       font-style: italic;
   }
}

</style>
