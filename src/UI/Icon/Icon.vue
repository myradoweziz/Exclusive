<script setup lang="ts">
  import { computed } from 'vue'
  import icons from './icons'

  const props = withDefaults(defineProps<{ name?: string }>(), { name: '' })

  const path = computed(() => {
    return (icons as any)[props.name]
  })
</script>

<template>
  <span class="icon" v-html="path"></span>
</template>

<style lang="scss" scoped>
  .icon {
    display: flex;
  }
</style>
