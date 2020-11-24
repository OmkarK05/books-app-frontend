<template>
  <div id="app">
    <app-layout msg="Welcome to Your Vue.js App" />
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
  padding: 0px 5px;
  margin: 0px;
  width: 100%;
  min-height: 100%;
}
</style>
