<template>
  <section class="feed-filter">
    <input @input="onChange" v-model="filter" class="filter-input" type="text" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      filter: ''
    };
  },

  methods: {
    onChange() {
      this.$emit('change', this.filter)
    }
  },
};
</script>