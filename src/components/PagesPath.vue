<script setup lang="ts">
  withDefaults(defineProps<{ pageTitle?: string }>(), {
    pageTitle: ''
  })
</script>

<template>
  <div class="about__path">
    <p>Home /</p>
    <span>{{ pageTitle }}</span>
  </div>
</template>

<style lang="scss" scoped>
  .about {
    // .about__path
    &__path {
      padding-top: 80px;
      padding-bottom: 40px;
      display: flex;
      align-items: center;
      gap: 12px;
      p {
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        opacity: 0.5;
      }
      span {
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
      }
    }
  }
</style>
