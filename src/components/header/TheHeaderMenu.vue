<script setup lang="ts">
  import { HEADER_MENU } from '@/utils'
</script>

<template>
  <nav class="menu">
    <ul class="menu__list">
      <li v-for="menu in HEADER_MENU" :key="menu.id" class="menu__item">
        <router-link :to="menu.path" exact class="menu__link"> {{ menu.name }} </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  .menu {
    // .menu__list
    &__list {
      display: flex;
      align-items: center;
      gap: 48px;
    }
    // .menu__item
    &__item {
    }
    // .menu__link
    &__link {
      color: var(--text-2, #000);
      text-align: center;
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      position: relative;
      &:hover {
        &::after {
          content: '';
          position: absolute;
          top: 20px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #000;
          opacity: 0.5;
        }
      }
    }
  }
  .router-link-active,
  .router-link-exact-active {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 20px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #000;
      opacity: 0.5;
    }
  }
</style>
