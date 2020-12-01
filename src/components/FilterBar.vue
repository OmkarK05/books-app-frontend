<template>
  <vs-row
    vs-justify="flex-end"
    vs-align="center"
    class="list-container"
  >
    <vs-col vs-w="12">
      Filters
    </vs-col>
    <vs-col vs-w="12">
      <ul>
        <li
          v-for="(filter, index) in filters"
          :key="index"
        >
          <vs-checkbox
            v-model="filtersActive"
            :vs-value="filter"
          >
            {{ filter }}
          </vs-checkbox>
        </li>
      </ul>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: 'FilterBar',
  props: {
    type: {
      type: String,
      default: '',
    },
    availableFilters: {},
  },
  data: function () {
    return {
      filtersActive: [],
      filters: ['Animation', 'Adventure', 'Family']
    };
  },

  watch: {
    filtersActive: function (curr) {
      this.$emit('handle-change-filters', curr, this.type);
    }
  }

};
</script>

<style scoped>
.list-container {
 padding: 15px 0;
}
ul{
  list-style: none;
  display: flex;
  flex-direction: row;
}
</style>