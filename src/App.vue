<template>
  <div id="app">
    <app-layout />
  </div>
</template>

<script>
import AppLayout from './layout/AppLayout'


export default {
  name: 'App',
  components: {
    AppLayout,
  }
}
</script>

<style>
#app{
  box-sizing: border-box;
  margin: 0px;
  width: 100%;
  min-height: 100%;
}
</style>
