<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { useRoute } from 'vue-router'

  import TheHeader from '@/components/header/TheHeader.vue'
  import TheFooter from '@/components/TheFooter.vue'
  import Icon from '@/UI/Icon'

  const route = useRoute()

  const isActive = ref(false)

  setTimeout(() => {
    isActive.value = true
  }, 1000)

  window.onscroll = function () {
    window.scrollY >= 100 || window.pageYOffset >= 100
      ? document.querySelector<any>('.visible-arrow').classList.add('visible')
      : document.querySelector<any>('.visible-arrow').classList.remove('visible')
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  watch(
    () => route.fullPath,
    () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  )
</script>

<template>
  <div class="wrapper">
    <the-header />
    <main class="main">
      <router-view />
    </main>
    <the-footer v-if="isActive" />
    <div @click="scrollTop" class="visible-arrow">
      <icon name="shopArrow" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .main {
    padding-top: 50px;
    flex: 1 1 auto;
  }
  .wrapper {
    display: flex;
    height: 100vh;
    flex-direction: column;
  }
  .visible-arrow {
    position: fixed;
    top: 650px;
    right: 10px;
    transform: rotate(270deg);
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    opacity: 0;
    transition: 0.3s all ease-in;
    z-index: 99;
    background-color: #d5d4d4;
  }
  .visible {
    opacity: 1;
  }
</style>
