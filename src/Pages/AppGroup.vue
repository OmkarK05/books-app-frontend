<template>
  <div>
    <vs-row
      vs-justify="center"
      vs-align="center"
    >
      <vs-col
        v-for="tab in tabs"
        :key="tab.id"
        vs-w="1"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
      >
        <div
          :class="activeTab === tab.id ? 'active' : ''"
          class="tab"
          @click="handleChangeTab(tab.id)"
        >
          <span>{{ tab.label }}</span>
        </div>
      </vs-col>
      <vs-col
        vs-w="12"
        class="content-container"
      >
        <app-tab>
          <app-images v-if="activeTab === 'images'" />
          <app-videos v-if="activeTab === 'videos'" />
          <app-gifs v-if="activeTab === 'gifs'" />
        </app-tab>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import AppImages from '../components/Images';
import AppVideos from '../components/Videos';
import AppGifs from '../components/Gifs';
import AppTab from '../Mixins/AppTab'

export default {
    components: {
        AppImages,
        AppVideos,
        AppGifs,
        AppTab
    },
    data() {
        return {
            activeTab: 'images',
            tabs: [{
                    id: 'images',
                    label: 'Images'
                },
                {
                    id: 'videos',
                    label: 'Videos'
                },
                {
                    id: 'gifs',
                    label: 'Gifs'
                }
            ]
        }
    },
    methods: {
        handleChangeTab: function (id) {
            console.log(id);
            this.activeTab = id;
        }
    },
}
</script>

<style lang="scss" scoped>
.tab {
    cursor: pointer;
    padding: 5px 0;
}

.active {
    border-bottom: 2px solid #FF6161;
}

.content-container {
    padding: 15px;
}
</style>
