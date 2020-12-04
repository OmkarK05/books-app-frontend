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
          @click="handleCheckBoxClick"
        >
          <vs-checkbox
            v-model="filter.isActive"
            :vs-value="filter.isActive"
          >
            {{ filter.name }}
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
    availableFilters: {
      type: Array,
      default: function () {
        return [];
      },
    },
    type: {
      type: String,
      default: '',
    },
  },
  data: function () {
    return {
      filters: [],
    };
  },
  watch: {
    availableFilters: function (filters) {
      this.filters = [...filters];
    }
  },
  beforeMount () {
    this.filters = this.availableFilters;
  },
  methods: {
    handleCheckBoxClick: function () {
      this.$emit('handle-filters-change', [...this.filters]);
    }
  },


};
</script>


<style scoped>
.list-container {
  padding: 15px 0;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: row;
}
</style>