<template>
  <div />
</template>

<script>

    export default {
        name: 'AppSwitcher',
        props: ['activeTab'],

        watch: {
            activeTab : function (link) {
                console.log(link)
                this.$router.replace(link)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>