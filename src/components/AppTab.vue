<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppTab',
  mounted : function () {
     console.log(this.$slots);
  }
}
</script>

<style scoped>

</style>