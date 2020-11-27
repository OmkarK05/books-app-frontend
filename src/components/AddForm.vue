<template>
  <div class="container">
    <div class="form-container">
      <vs-row vs-justify="center">
        Add New Book
      </vs-row>
      <vs-row
        vs-justify="center"
        vs-align="center"
      >
        <vs-col vs-w="12">
          <vs-input
            v-model="name"
            class="name-input"
            label-placeholder="Name"
          />
        </vs-col>
        <vs-col vs-w="12">
          <vs-input
            v-model="author"
            class="author-input"
            label-placeholder="Author"
          />
        </vs-col>
        <vs-col
          vs-w="12"
          class="description"
        >
          <vs-textarea
            v-model="description"
            class="description-input"
            height="100px"
            placeholder="Description"
          />
        </vs-col>
        <vs-col
          vs-w="12"
        >
          <vs-button
            class="btn"
            @click="handleSubmit"
          >
            Add Book
          </vs-button>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddForm',
  components: {},
  data: function () {
    return {
      name: '',
      description: '',
      author: '',
    };
  },
  methods: {
    handleSubmit: function () {
      let date = new Date();
      // eslint-disable-next-line max-len
      let uuid = `book${ date.getDate() }${ date.getMonth() }${ date.getFullYear() }${ date.getHours() }${ date.getMinutes() }${ date.getSeconds() }`;
      console.log(uuid)
      let newBook = {
        name: this.name,
        description: this.description,
        author: this.author,
        image:
            'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1578603226-51dNGcQl4HL.jpg?crop=1xw:0.993xh;' +
            'center,top&resize=480:*'
        ,
        id: uuid,
        saved: false,
      };

      this.addBook({...newBook});

    },

    ...mapActions({
      addBook: 'book/addBook'
    })
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 360px;
  margin: 0 auto;
}

.form-container{
  width: fit-content;
}
.name-input, .author-input {
  width: 100%;
  padding-top: 15px;
}


.description {
  padding-top: 30px;
}

.description-input {
  font-size: 12px;
  max-width: 100%;
}

.btn {
  margin: 0 0;
  width: 100%;
}


</style>
