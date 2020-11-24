<template>
  <vs-row>
    <vs-col 
      v-for="item in cardData"
      :key="item.id"
      vs-lg="2"
      vs-xs="12"
      class="card"
    >
      <div>
        <vs-card
          class="cardx"
          fixed-height
        >
          <div slot="header">
            <h3>
              Long Bright River: A Novel
            </h3>
          </div>
          <div slot="media">
            <img 
              class="book-image"
              :src="item.image"
              alt="Book Image"
            >
          </div>
          <div>
            <span>
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </span>
            <vs-row class="author">
              -- {{ item.author }}
            </vs-row>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button
                type="gradient"
                color="danger"
                :icon="item.saved === true ? 'delete' : 'favorite'"
                @click="handleSaveBook(item.id)"
              />
              <!--              <vs-button-->
              <!--                color="primary"-->
              <!--                icon="turned_in_not"-->
              <!--              />-->
              <!--              <vs-button-->
              <!--                color="rgb(230,230,230)"-->
              <!--                color-text="rgb(50,50,50)"-->
              <!--                icon="settings"-->
              <!--              />-->
            </vs-row>
          </div>
        </vs-card>
      </div>
    </vs-col>
  </vs-row>
</template>

<script>
  // import Section from "../Layout/Section"

    export default {
        name:'AppCard',
        components: {
          // 'app-section':Section,
        },
        props: ['cardData'],
      mounted () {
          console.log(this.cardData);
      },
        methods: {
          handleSaveBook : function (id){
            this.$emit('handleSave', id)
          }
          
        }
    }
</script>

<style lang="scss" scoped>
.card{
  height: auto;
  margin-right: 15px;
}
.book-image{
  width: auto;
  margin: 0 auto;
  height: 200px;
}
.author{
  padding: 8px 0;
}
</style>