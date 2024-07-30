<script setup lang="ts">
  import RedBlockTitle from '../RedBlockTitle.vue'
  import GlobalButton from '@/UI/GlobalButton'
  import ProductsRow from './ProductsRow.vue'
  import Icon from '@/UI/Icon'
</script>

<template>
  <section class="products">
    <div class="products__container">
      <red-block-title title="Our Products" red-title />
      <div class="products__title-arrows">
        <div class="products__title">Explore Our Products</div>
        <div class="products__arrows">
          <div v-for="i in 2" :key="i" class="products__arrow">
            <icon name="shopArrow" />
          </div>
        </div>
      </div>
      <products-row />
      <div class="products__btn">
        <global-button title="View All Products" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .products {
    padding-top: 90px;
    // .products__container
    &__container {
      max-width: 1305px;
      padding: 0 10px;
      margin: 0 auto;
    }
    // .products__title-arrows
    &__title-arrows {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 60px;
    }
    // .products__title
    &__title {
      color: var(--text-2, #000);
      font-family: Inter;
      font-size: 36px;
      font-weight: 600;
      line-height: 133.333%;
      letter-spacing: 1.44px;
    }
    // .products__arrows
    &__arrows {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    // .products__arrow
    &__arrow {
      padding: 10px;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      background-color: #f5f5f5;
      &:first-child {
        transform: rotate(180deg);
      }
    }
    // .products__btn
    &__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 60px;
    }
  }
</style>
