<template>
  <div
    class="container"
    :class="extend ? 'open-sidebar' : 'close-sidebar'"
  >
    <vs-row 
      class="top-row"
      vs-justify="center"
      vs-align="flex-start"
    >
      <vs-col
        class="top"
        vs-w="12"
        vs-type="flex"
        vs-align="center"
        vs-justify="flex-start"
      >
        <div class="option">
          <span class="icon">
            <vs-icon
              icon="import_contacts"
              size="22px"
            />
          </span>
        </div>

        <div
          class="option"
          @click="handleExtend"
        >
          <span class="icon">
            <vs-icon
              class="move-icon"
              icon="keyboard_arrow_right"
              size="22px"
            />
          </span>
        </div>
      </vs-col>
    </vs-row>
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
            v-for="tab in sidebarContent.center"
            :key="tab.id"
            v-slot="{ isActive, href, navigate, isExactActive }"
            :to="tab.link"
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
                :class="[isActive && isExactActive ? 'active-color' : '' , extend ? 'open' : 'close']"
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
    // TODO OK: change data() to data: function ()
    data() {
        return {
            // TODO OK: rename extend to isExtend
            extend: false,
            // TODO OK: remove activePage data property
            activePage: 'Home',
          // TODO OK: check for use and remove is not being used
            activeTab: '',
            // TODO OK: move sidebarContent to AppLayout and drive change from that component
            sidebarContent: {
                // TODO OK: remove 'top' key from sidebarContent
                top: [{
                        label: 'Images',
                        icon: 'home',
                        id: 'images-tab',
                        iconSize: '18px',
                        link: '/images',
                    },
                    {
                        label: 'Videos',
                        icon: 'library_books',
                        id: 'videos-tab',
                        iconSize: '18px',
                        link: '/videos',
                    },
                    {
                        label: 'Gifs',
                        icon: 'library_add',
                        id: 'gifs-tab',
                        iconSize: '18px',
                        link: '/gifs',
                    },
                ],
                center: [{
                        label: 'Home',
                        icon: 'home',
                        id: 'home-tab',
                        iconSize: '18px',
                        link: '/',
                    },
                    {
                        label: 'My Library',
                        icon: 'library_books',
                        id: 'myLibrary-tab',
                        iconSize: '18px',
                        link: '/saved-books',
                    },
                    {
                        label: 'Add Book',
                        icon: 'library_add',
                        id: 'home-tab',
                        iconSize: '18px',
                        link: '/add-book',
                    },
                    {
                        label: 'Groups',
                        icon: 'group',
                        id: 'groups-tab',
                        iconSize: '18px',
                        link: '/group',
                    }
                ]
            },

        }
    },
    methods: {
        handleExtend: function () {
            console.log('clicked')
            this.extend = !this.extend;
            this.$emit('extendSidebar', this.extend)
        },
        // TODO: remove changeActiveTab
        changeActiveTab: function (link) {
            this.activeTab = link;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./../assets/scss/mixins";

.active {
    background: #ffffff !important;
}

.active-color {
    color: #FF6161 !important;
}

.open-sidebar {
    width: 150px;
}

.close-sidebar {
    width: 50px;
}

.open {
    opacity: 1;
}

.close {
    display: none !important;
    opacity: 0;
}

.main-row {
    height: 100%;
}

.top {
    height: fit-content;
    flex-direction: column;
}

.option {
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
    position: fixed;
    height: 100%;
    right: 0;
    background: #FF6161;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s linear;
    border-radius: 0px;

    @include Desktop() {
        left: 0;
    }

}

.bottom-row{
  margin-top: 1rem;
}


.center {
    height: fit-content;
}

.content {
    margin: 0rem 0px;
}
</style>
