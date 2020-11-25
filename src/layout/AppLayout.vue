<template>
  <vs-row
    class="container"
    vs-type="flex"
    justify-content="space-between"
  >
    <vs-col
      class="sidebar"
      :class="extend ? 'open-sidebar' : 'close-sidebar'"
    >
      <app-sidebar @extendSidebar="handleExtend" />
    </vs-col>
    <vs-col
      vs-w="12"
      class="main"
      :class=" extend ? 'open' : 'close'"
    >
      <vs-row>
        <app-header />
      </vs-row>
      <vs-row>
        <app-section />
      </vs-row>
    </vs-col>
  </vs-row>
</template>

<script>
import AppHeader from './AppHeader';
import AppSection from './AppSection';
import AppSidebar from './AppSidebar';

export default {
    name: 'AppLayout',
    components: {
        AppHeader,
        AppSection,
        AppSidebar,
    },
    data() {
        return {
            extend: false,
        };
    },
    methods: {
        handleExtend: function (bool) {
            this.extend = bool;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/SCSS/mixins";

.main {
    width: 100%;
    transition: all 0.5s linear;
    border-radius: 15px;
    margin: 5px 0;

    @include Mobile() {
        margin-left: 0px !important;
        margin-right: 50px;
    }
}

.open-sidebar {
    width: 150px !important;
}

.close-sidebar {
    width: 50px !important;
}

.open {
    margin-left: 150px !important;
}

.close {
    margin-left: 50px !important;
}

.sidebar {
    height: 100%;
    width: 150px;
}

.container {
    width: 100%;
}

.footer {
    width: 100%;
    height: 30px;
    position: fixed;
    bottom: 0;
    background-color: rgb(195, 197, 194);
}
</style>
