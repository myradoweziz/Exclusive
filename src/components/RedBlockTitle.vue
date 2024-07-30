<script setup lang="ts">
  withDefaults(defineProps<{ title?: string; redTitle?: boolean }>(), {
    redTitle: false,
    title: ''
  })
</script>

<template>
  <div class="wish-list__title-block">
    <div class="wish-list__red-block" />
    <div :class="['wish-list__title', { 'red-title': redTitle }]">{{ title }}</div>
  </div>
</template>

<style lang="scss" scoped>
  .wish-list {
    // .wish-list__title
    &__title {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 400;
      line-height: 130%;
    }
    // .wish-list__title-block
    &__title-block {
      display: flex;
      align-items: center;
      gap: 16px;
      padding-bottom: 24px;
    }
    // .wish-list__red-block
    &__red-block {
      width: 20px;
      height: 40px;
      border-radius: 5px;
      background-color: #db4444;
    }
  }
  .red-title {
    color: #db4444;
    font-weight: 600;
  }
</style>
