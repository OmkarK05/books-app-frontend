<template>
<div class="container">
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name : 'AppSection',
    mounted: function () {
        console.log(this)
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
}
</style>
