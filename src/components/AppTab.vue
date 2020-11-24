<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
name: 'Tab',
  mounted () {
     console.log(this.$slots);
  }
}
</script>

<style scoped>

</style>