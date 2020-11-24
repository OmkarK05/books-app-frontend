<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppTab',
  mounted () {
     console.log(this.$slots);
  }
}
</script>

<style scoped>

</style>