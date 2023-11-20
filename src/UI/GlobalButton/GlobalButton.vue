<script setup lang="ts">
  import { defineProps } from 'vue'

  defineProps({
    title: { type: String, default: '' }
  })
</script>

<template>
  <button class="flash-sales__btn">{{ title }}</button>
</template>

<style lang="scss" scoped>
  .flash-sales {
    &__btn {
      padding: 16px 48px;
      color: var(--text, #fafafa);
      font-family: Poppins;
      font-size: 16px;
      font-weight: 500;
      line-height: 150%;
      border-radius: 4px;
      background: var(--button-2, #db4444);
    }
  }
</style>
