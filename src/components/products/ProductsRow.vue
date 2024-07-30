<script setup lang="ts">
  import Icon from '@/UI/Icon'

  import { CHECKBOX_ICONS, SWIPER_ICONS } from '@/utils'
</script>

<template>
  <div class="products__row">
    <div v-for="i in 8" :key="i" class="products__card">
      <div class="products__image-block">
        <div class="products__mark-icons">
          <div class="products__mark">New</div>
          <div class="products__icons">
            <div v-for="item in SWIPER_ICONS" :key="item" class="products__icon">
              <icon :name="item" />
            </div>
          </div>
        </div>
        <div class="products__image">
          <img src="@/assets/img/dog_food.png" alt="" />
        </div>
        <div class="products__btn-cart">Add To Cart</div>
      </div>
      <div class="products__content">
        <div class="products__content-title">Breed Dry Dog Food</div>
        <div class="products__count-stars">
          <div class="products__count">$100</div>
          <div class="products__stars">
            <div v-for="i in 3" :key="i" class="products__star">
              <icon name="star" />
            </div>
            <div v-for="i in 2" :key="i" class="products__star">
              <icon name="starDefault" />
            </div>
          </div>
          <div class="products__length">(35)</div>
        </div>
        <div class="products__checked-icons">
          <div v-for="item in CHECKBOX_ICONS" :key="item" class="products__checked-icon">
            <icon :name="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .products {
    // .products__row
    &__row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      row-gap: 60px;
      column-gap: 30px;
      padding-bottom: 60px;
    }
    // .products__card
    &__card {
    }
    // .products__image-block
    &__image-block {
      padding: 12px;
      border-radius: 4px;
      background: var(--secondary, #f5f5f5);
      position: relative;
      overflow: hidden;
      cursor: pointer;
      &:hover {
        .products__btn-cart,
        .products__icons {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
    // .products__mark-icons
    &__mark-icons {
      display: flex;
      justify-content: space-between;
    }
    // .products__mark
    &__mark {
      height: 26px;
      padding: 4px 12px;
      border-radius: 4px;
      background: var(--button-1, #0f6);
      color: var(--text, #fafafa);
      font-family: Poppins;
      font-size: 12px;
      font-weight: 400;
      line-height: 150%;
    }
    // .products__icons
    &__icons {
      position: absolute;
      top: 10px;
      right: 10px;
      transform: translateY(-80px);
      opacity: 0;
      transition: 0.4s all ease-in-out;
    }
    // .products__icon
    &__icon {
      background-color: #fff;
      border-radius: 50%;
      &:not(:first-child) {
        margin-top: 8px;
      }
    }
    // .products__image
    &__image {
      padding-top: 50px;
      text-align: center;
      aspect-ratio: 1/1;
    }
    // .products__btn-cart
    &__btn-cart {
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translateY(50px);
      opacity: 0;
      transition: 0.4s all ease;
      width: 100%;
      padding: 8px;
      border-radius: 0px 0px 4px 4px;
      background: var(--button, #000);
      text-align: center;
      color: #fff;
      font-family: Poppins;
      font-size: 16px;
      font-weight: 500;
      line-height: 150%;
    }
    // .products__content
    &__content {
      padding-top: 16px;
    }
    // .products__content-title
    &__content-title {
      font-family: Poppins;
      font-size: 16px;
      font-weight: 500;
      line-height: 150%;
      padding-bottom: 10px;
    }
    // .products__count-stars
    &__count-stars {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    // .products__count
    &__count {
      color: var(--secondary-2, #db4444);
      font-family: Poppins;
      font-size: 16px;
      font-weight: 500;
      line-height: 150%;
    }
    // .products__stars
    &__stars {
      display: flex;
      align-items: center;
      gap: 2px;
    }
    // .products__star
    &__star {
    }
    // .products__length
    &__length {
      font-family: Poppins;
      font-size: 14px;
      font-weight: 600;
      line-height: 150%;
      opacity: 0.5;
    }
    // .products__checked-icons
    &__checked-icons {
      padding-top: 10px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    // .products__checked-icon
    &__checked-icon {
    }
  }
</style>
