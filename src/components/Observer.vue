<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'

  const emit = defineEmits(['intersect'])

  const props = defineProps({
    options: {
      type: Object,
      default: () => {}
    }
  })

  const root = ref(null)
  const observer = ref<any>(null)

  onMounted(() => {
    observer.value = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        emit('intersect')
      }
    }, props.options)
    observer.value.observe(root.value)
  })

  onUnmounted(() => {
    observer.value.disconnect()
  })
</script>

<template>
  <div ref="root" />
</template>
