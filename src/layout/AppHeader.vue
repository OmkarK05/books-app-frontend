<template>
  <vs-row
    class="container"
    vs-justify="flex-start"
    vs-align="center"
  >
<!--    <vs-col-->
<!--      vs-lg="6"-->
<!--      vs-sm="6"-->
<!--      vs-xs="12"-->
<!--    >-->
<!--      <span>-->
<!--        <vs-input-->
<!--          v-model="query"-->
<!--          class="search-input"-->
<!--          icon="search"-->
<!--          icon-after="true"-->
<!--          placeholder="Search"-->
<!--        />-->
<!--      </span>-->
<!--    </vs-col>-->
    <vs-col
      vs-lg="12"
      vs-sm="12"
      vs-xs="12"
      vs-type="flex"
      vs-align="center"
      vs-justify="flex-end"
    >
      <span class="icon-container">
        <vs-icon
          class="icon"
          icon="notifications_none"
          size="18px"
        />
      </span>
      <div class="profile">
        <div class="icon-container">
          <vs-icon
            class="profile-icon"
            icon="account_circle"
            size="18px"
          />
        </div>
        <div>Omkar K</div>
<!--        <div class="icon-container-down">-->
<!--          <vs-icon-->
<!--            icon="keyboard_arrow_down"-->
<!--            size="18px"-->
<!--          />-->
<!--        </div>-->
      </div>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            query: '',
        }
    }
}
</script>

<style lang="scss" scoped>
.search-input {
    width: 100%;
    border-radius: 50% !important;
}

.container{
    padding: 8px 12px;
}

.profile {
    width: fit-content;
    padding-right: 8px ;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
}

.profile-icon{
    margin: 0 3px;
}

.icon{
    margin: 0 8px;
}

.icon-container{
    display: flex;
    justify-content: center;
    align-items: center;
}
.down{
    justify-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
