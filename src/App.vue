<template>
  <div id="app">
    <!--    TODO OK: remove msg prop  -->
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
/*TODO OK: add lang="scss"*/
/*TODO OK: move this to AppLayout*/
#app{
  box-sizing: border-box;
  margin: 0px;
  width: 100%;
  min-height: 100%;
}
</style>
