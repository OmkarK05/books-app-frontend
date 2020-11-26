<template>
  <div
    class="container"
  >
    <!--    <vs-row-->
    <!--      class="top-row"-->
    <!--      vs-justify="center"-->
    <!--      vs-align="flex-start"-->
    <!--    >-->
    <!--      <vs-col-->
    <!--        class="top"-->
    <!--        vs-w="12"-->
    <!--        vs-type="flex"-->
    <!--        vs-align="center"-->
    <!--        vs-justify="flex-start"-->
    <!--      >-->
    <!--        <div class="option">-->
    <!--          <span class="icon">-->
    <!--            <vs-icon-->
    <!--              icon="import_contacts"-->
    <!--              size="22px"-->
    <!--            />-->
    <!--          </span>-->
    <!--        </div>-->

    <!--        <div-->
    <!--          class="option"-->
    <!--          @click="handleExtend"-->
    <!--        >-->
    <!--          <span class="icon">-->
    <!--            <vs-icon-->
    <!--              class="move-icon"-->
    <!--              icon="keyboard_arrow_right"-->
    <!--              size="22px"-->
    <!--            />-->
    <!--          </span>-->
    <!--        </div>-->
    <!--      </vs-col>-->
    <!--    </vs-row>-->
    <vs-row class="bottom-row">
      <vs-col
        class="center"
        vs-w="12"
        vs-type="flex"
        vs-align="flex-start"
        vs-justify="center"
      >
        <div class="options-container">
          <router-link
            v-for="tab in sidebarContent"
            :key="tab.id"
            v-slot="{ isActive, href, navigate, isExactActive }"
            :to="tab.link"
            class="router-link"
          >
            <div
              class="option"
              :href="href"
              :class="isActive && isExactActive ? 'active' : ''"
              @click="navigate"
            >
              <span class="icon">
                <vs-icon
                  :icon="tab.icon"
                  :class="isActive && isExactActive ? 'active-color' : '' "
                  :size="tab.iconSize"
                />
              </span>
              <span
                class="option-name"
                :class="[isActive && isExactActive ? 'active-color' : '']"
              >{{ tab.label }}</span>
            </div>
          </router-link>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>

export default {
  name: 'AppSidebar',
  props: {
    sidebarContent: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data: function () {
    return {
      // isExtend: false,
    };
  }
  ,
  methods: {
    // handleExtend: function () {
    //   this.isExtend = ! this.isExtend;
    //   this.$emit('extendSidebar', this.isExtend);
    // }
  }
}
;
</script>

<style lang="scss" scoped>

@import "./../assets/scss/mixins";

.active {
  background: #ffffff !important;
}

.active-color {
  color: #FF6161 !important;
}

.main-row {
  height: 100%;
}

.top {
  height: fit-content;
  flex-direction: column;
}
.router-link{
  padding: 0;
  margin: 0;
}
.option-container{
  width: 100%;
}
.option {
  width: 100%;
  padding: 8px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.icon {
  color: #ffffff;
  font-size: 16px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.option-name {
  color: #ffffff;
  font-size: 14px;
  width: 100px;
  text-align: left;
  transition: width 0.5s linear;
  transition-delay: 0.5s;
}

.container {
  height: 100%;
  width: 100%;
  background: #FF6161;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s linear;
  border-radius: 0;

  @include Desktop() {
  }

}

.bottom-row {
  margin-top: 1rem;
}


.center {
  height: fit-content;
}

.content {
  margin: 0 0;
}
</style>
