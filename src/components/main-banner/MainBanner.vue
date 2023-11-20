<script setup lang="ts">
  import Icon from '@/UI/Icon'
  import MainBannerSwiper from './MainBannerSwiper.vue'

  interface SidebarItems {
    id: number
    name: string
    arrow?: Boolean
  }

  const sidebarItems = [
    { id: 0, name: 'Woman’s Fashion', arrow: true },
    { id: 1, name: 'Men’s Fashion', arrow: true },
    { id: 2, name: 'Electronics' },
    { id: 3, name: 'Home & Lifestyle' },
    { id: 4, name: 'Medicine' },
    { id: 5, name: 'Sports & Outdoor' },
    { id: 6, name: 'Baby’s & Toys' },
    { id: 7, name: 'Groceries & Pets' },
    { id: 8, name: 'Health & Beauty' }
  ] as SidebarItems[]
</script>

<template>
  <section class="main-banner">
    <div class="main-banner__container">
      <div class="main-banner__row">
        <div class="main-banner__sidebar">
          <div class="main-banner__sidebar">
            <div class="main-banner__sidebar__row">
              <nav class="main-banner__sidebar_menu menu">
                <ul class="menu__list">
                  <li v-for="item in sidebarItems" :key="item.id" class="menu__item">
                    <p>{{ item.name }}</p>
                    <div v-if="item.arrow" class="menu__icon">
                      <icon name="arrowBottom" />
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <main-banner-swiper />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .main-banner {
    margin-bottom: 140px;
    // .main-banner__container
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 0px;
      left: 23%;
      width: 2px;
      height: 500px;
      background: #000;
      opacity: 0.2;
    }
    &__container {
      max-width: 1305px;
      padding: 0 10px;
      margin: 0 auto;
    }
    // .main-banner__row
    &__row {
      padding-top: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 45px;
    }
    // .main-banner__sidebar
    &__sidebar {
    }
  }

  .menu {
    // .menu__list
    &__list {
    }
    // .menu__item
    &__item {
      display: flex;
      align-items: center;
      gap: 50px;
      justify-content: space-between;
      cursor: pointer;
      &:not(:last-child) {
        padding-bottom: 16px;
      }
      p {
        color: var(--text-2, #000);
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
      }
    }
    // .menu__icon
    &__icon {
      transform: rotate(270deg);
    }
  }
</style>
