<template>
  <div class="">
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
  </div>
</template>

<script>
export default {
  name: 'FilterBar',
  // props: {
  //   filters: {
  //     type: Array,
  //     default: function () {
  //       return [];
  //     }
  //   }
  // },
  data: function () {
    return {
      filtersActive: [],
      filters: ['Animation', 'Adventure', 'Family']
    };
  },

  watch: {
    filtersActive: function (curr) {
      console.log(curr);
      this.$emit('activeFilters', curr);
    }
  }

};
</script>

<style scoped>

</style>