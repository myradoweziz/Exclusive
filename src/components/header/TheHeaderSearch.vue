<script setup lang="ts">
  import Icon from '@/UI/Icon'
</script>

<template>
  <div class="header__search search-header">
    <div class="search-header__row">
      <div class="search-header__input">
        <input type="text" placeholder="What are you looking for?" />
      </div>
      <div class="search-header__icon">
        <icon name="search" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .search-header {
    // .search-header__row
    &__row {
      position: relative;
    }
    // .search-header__input
    &__input {
      width: 243px;
      height: 38px;
      input {
        width: 100%;
        height: 100%;
        font-family: Poppins;
        font-size: 12px;
        font-weight: 400;
        line-height: 150%;
        padding: 7px 20px;
        border-radius: 4px;
        background: var(--secondary, #f5f5f5);
      }
    }
    // .search-header__icon
    &__icon {
      position: absolute;
      top: 50%;
      right: 0;
      cursor: pointer;
      transform: translate(-50%, -50%);
      z-index: 3;
    }
  }
</style>
