<template>
  <div>
    <vs-row />
    <vs-row>
      <vs-col>
        <vs-input
          v-model="name"
          label-placeholder="Name"
        />
      </vs-col>
      <vs-col>
        <vs-input
          v-model="author"
          label-placeholder="Author"
        />
      </vs-col>
      <vs-col>
        <vs-input
          v-model="description"
          label-placeholder="Description"
        />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>

export default {
    name: 'AddForm',
    components: {
    },
    data: function (){
      return{
        name : '',
        description: '',
        author: '',
      }
    }
}
</script>

<style lang="scss" scoped>

</style>
