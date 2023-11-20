<script setup lang="ts">
  import Default from '@/layouts/Default.vue'
</script>

<template>
  <component :is="Default">
    <router-view />
  </component>
</template>

<style lang="scss">
  @import '@/assets/scss/fonts.scss';
  @import '@/assets/scss/null.scss';
</style>
