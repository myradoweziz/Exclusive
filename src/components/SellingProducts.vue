<script setup lang="ts">
  import GlobalButton from '@/UI/GlobalButton'
  import Icon from '@/UI/Icon'
  import RedBlockTitle from '@/components/RedBlockTitle.vue'

  import { SWIPER_ICONS } from '@/utils'
</script>

<template>
  <section class="selling-products">
    <div class="selling-products__container">
      <red-block-title title="This Month" red-title />
      <div class="selling-products__title-btn">
        <div class="selling-products__title">Best Selling Products</div>
        <div class="selling-products__btn">
          <global-button title="View All" />
        </div>
      </div>
      <div class="selling-products__row">
        <div v-for="i in 4" :key="i" class="selling-products__card">
          <div class="selling-products__image-block">
            <div class="selling-products__icons">
              <div v-for="item in SWIPER_ICONS" :key="item" class="selling-products__icon">
                <icon :name="item" />
              </div>
            </div>
            <div class="selling-products__image">
              <img src="@/assets/img/coat.png" alt="" />
            </div>
          </div>
          <div class="selling-products__content">
            <div class="selling-products__content-title">The north coat</div>
            <div class="selling-products__content-counts">
              <p>$260</p>
              <span>$360</span>
            </div>
            <div class="selling-products__content-stars-length">
              <div class="selling-products__stars">
                <div v-for="i in 5" :key="i" class="selling-products__star">
                  <icon name="star" />
                </div>
              </div>
              <div class="selling-products__length">(65)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .selling-products {
    // .selling-products__container
    &__container {
      max-width: 1305px;
      margin: 0 auto;
      padding: 0 10px;
    }
    // .selling-products__title-btn
    &__title-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 60px;
    }
    // .selling-products__title
    &__title {
      font-family: Inter;
      font-size: 36px;
      font-weight: 600;
      line-height: 133.333%;
      letter-spacing: 1.44px;
    }
    // .selling-products__row
    &__row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
    }
    // .selling-products__card
    &__card {
    }
    // .selling-products__image-block
    &__image-block {
      border-radius: 4px;
      background: var(--secondary, #f5f5f5);
      position: relative;
      padding: 12px;
      cursor: pointer;
      overflow: hidden;
      &:hover {
        .selling-products__icons {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
    // .selling-products__icons
    &__icons {
      position: absolute;
      top: 15px;
      right: 10px;
      transform: translateY(-90px);
      opacity: 0;
      transition: 0.4s all ease-out;
    }
    // .selling-products__icon
    &__icon {
      background-color: #fff;
      border-radius: 50%;
      &:not(:first-child) {
        margin-top: 8px;
      }
    }
    // .selling-products__image
    &__image {
      padding-top: 50px;
      text-align: center;
      aspect-ratio: 1/1;
    }
    // .selling-products__content
    &__content {
      padding-top: 16px;
    }
    // .selling-products__content-title
    &__content-title {
      font-family: Poppins;
      font-weight: 500;
      line-height: 150%;
      padding-bottom: 8px;
    }
    // .selling-products__content-counts
    &__content-counts {
      display: flex;
      align-items: center;
      gap: 12px;
      p {
        color: var(--secondary-2, #db4444);
        font-family: Poppins;
        font-weight: 500;
        line-height: 150%;
      }
      span {
        font-family: Poppins;
        font-weight: 500;
        line-height: 150%;
        text-decoration: line-through;
        opacity: 0.5;
      }
    }
    // .selling-products__content-stars-length
    &__content-stars-length {
      padding-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    // .selling-products__stars
    &__stars {
      display: flex;
      align-items: center;
      gap: 3px;
    }
    // .selling-products__star
    &__star {
    }
    // .selling-products__length
    &__length {
      font-family: Poppins;
      font-size: 14px;
      font-weight: 600;
      line-height: 150%;
      opacity: 0.5;
    }
  }
</style>
