<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {}
});
</script>

<style lang="scss">
@import "./sass/global.scss";

#app {
  background-color: #000;
  color: #FFF;
  overflow: hidden;
}
</style>
