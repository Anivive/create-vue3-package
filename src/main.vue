<template>
  <div>{{ toUpperCase(title) }}</div>
</template>

<script>
export default {
  name: 'Component',
  props: {
    title: String
  },
  methods: {
    toUpperCase(val) {
      return val.toUpperCase();
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
