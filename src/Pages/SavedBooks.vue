<template>
  <div>
    Saved Books Page
  </div>
</template>

<script>

export default {
    name : 'SavedBooks',
    components: {
    },
    computed: {
      savedBooks : function (){
        return this.$store.getters.savedBooks;
      }
    }

}
</script>

<style lang="scss" scoped>

</style>
