<script setup lang="ts">
  import { ref } from 'vue'

  import FlashSalesContent from '@/components/flash-sales/FlashSalesContent.vue'
  import GlobalButton from '@/UI/GlobalButton'
  import RedBlockTitle from '@/components/RedBlockTitle.vue'
  import Icon from '@/UI/Icon'

  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Autoplay } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/pagination'

  const autoplay = {
    delay: 2000,
    disableOnInteraction: false
  }

  const flashSalesSwiperIcons = ['wishList', 'flipEye']

  const swiperRef = ref<any>(null)

  const modules = [Autoplay]

  const prevOrNextSlide = (index: number) => {
    index === 1 ? swiperRef.value.$el.swiper.slidePrev() : swiperRef.value.$el.swiper.slideNext()
  }
</script>

<template>
  <section class="flash-sales">
    <div class="flash-sales__container">
      <div class="flash-sales__row">
        <red-block-title title="Today’s" red-title />
        <flash-sales-content>
          <div class="flash-sales__arrows">
            <div v-for="i in 2" :key="i" @click="prevOrNextSlide(i)" class="flash-sales__arrow">
              <icon name="shopArrow" />
            </div>
          </div>
        </flash-sales-content>
      </div>
    </div>
    <swiper
      ref="swiperRef"
      :slidesPerView="4.5"
      :speed="2000"
      :spaceBetween="30"
      :autoplay="autoplay"
      :modules="modules"
      class="mySwiper flash-sales_swiper"
    >
      <swiper-slide v-for="i in 16" :key="i" class="flash-sales_swiper__slide">
        <div class="flash-sales__body">
          <div class="flash-sales__image-block">
            <div class="flash-sales__count-icons">
              <div class="flash-sales__count">-40%</div>
              <div class="flash-sales__icons">
                <div v-for="(item, index) in flashSalesSwiperIcons" :key="index" class="flash-sales__icon">
                  <icon :name="item" />
                </div>
              </div>
            </div>
            <div class="flash-sales__image">
              <img src="@/assets/img/gamepad.png" alt="" />
            </div>
            <div class="flash-sales__btn-cart">Add to cart</div>
          </div>
          <div class="flash-sales__status">
            <div class="flash-sales__product-name">HAVIT HV-G92 Gamepad</div>
            <div class="flash-sales__product-count">
              <p>$120</p>
              <span>$160</span>
            </div>
            <div class="flash-sales__stars-number">
              <div class="flash-sales__stars">
                <icon v-for="i in 5" :key="i" name="star" />
              </div>
              <div class="flash-sales__number">(88)</div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="flash-sales__btn-block">
      <global-button title="View All Products" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .flash-sales {
    // .flash-sales__container

    &__container {
      max-width: 1305px;
      margin: 0 auto;
      padding: 0 10px;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: -500px;
        left: 0;
        width: 100%;
        height: 2px;
        background: #000;
        opacity: 0.2;
      }
    }
    // .flash-sales__row
    &__row {
    }
    // .flash-sales__arrows
    &__arrows {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    // .flash-sales__arrow
    &__arrow {
      cursor: pointer;
      background: var(--secondary, #f5f5f5);
      border-radius: 50%;
      padding: 8px 10px;
      &:first-child {
        transform: rotate(180deg);
      }
    }
    &__btn-block {
      display: flex;
      justify-content: center;
      padding: 60px 0;
    }

    // .flash-sales__body
    &__body {
      position: relative;
      cursor: pointer;
      &:hover {
        .flash-sales__btn-cart {
          opacity: 1;
          transform: translateY(0);
        }
        .flash-sales__icons {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
    // .flash-sales__btn-cart
    &__btn-cart {
      transform: translateY(50px);
      transition: 0.5s all ease;
      opacity: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 8px;
      cursor: pointer;
      text-align: center;
      border-radius: 0px 0px 4px 4px;
      background: var(--button, #000);
      color: #fff;
      font-family: Poppins;
      font-size: 16px;
      font-weight: 500;
      line-height: 150%;
    }
    // .flash-sales__image-block
    &__image-block {
      position: relative;
      border-radius: 4px;
      background: var(--secondary, #f5f5f5);
      padding: 12px;
      height: 250px;
      overflow: hidden;
    }
    // .flash-sales__count-icons
    &__count-icons {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    // .flash-sales__count
    &__count {
      border-radius: 4px;
      background: var(--secondary-2, #db4444);
      color: var(--text, #fafafa);
      font-family: Poppins;
      font-size: 12px;
      font-weight: 400;
      line-height: 150%;
    }
    // .flash-sales__icons
    &__icons {
      display: flex;
      flex-direction: column;
      gap: 10px;
      position: absolute;
      top: 10px;
      right: 10px;
      transform: translateY(-90px);
      transition: 0.5s all ease;
      opacity: 0;
    }
    // .flash-sales__icon
    &__icon {
      background-color: #ffff;
      border-radius: 50%;
      overflow: hidden;
    }
    // .flash-sales__image
    &__image {
      padding-top: 20px;
      aspect-ratio: 1/1;
      text-align: center;
    }
    // .flash-sales__status
    &__status {
      padding-top: 16px;
    }
    // .flash-sales__product-name
    &__product-name {
      padding-bottom: 8px;
      color: #000;
      font-family: Poppins;
      font-size: 16px;
      font-weight: 500;
      line-height: 150%;
    }
    // .flash-sales__product-count
    &__product-count {
      display: flex;
      align-items: center;
      gap: 12px;
      p {
        color: var(--secondary-2, #db4444);
        font-family: Poppins;
        font-size: 16px;
        font-weight: 500;
        line-height: 150%;
      }
      span {
        color: var(--button, #000);
        font-family: Poppins;
        font-size: 16px;
        font-weight: 500;
        line-height: 150%;
        text-decoration: line-through;
        opacity: 0.5;
      }
    }
    // .flash-sales__stars-number
    &__stars-number {
      display: flex;
      gap: 8px;
    }
    // .flash-sales__stars
    &__stars {
      display: flex;
      gap: 3px;
    }
    // .flash-sales__number
    &__number {
      color: var(--text-2, #000);
      font-family: Poppins;
      font-size: 14px;
      font-weight: 600;
      line-height: 150%;
      opacity: 0.5;
    }
  }

  .flash-sales_swiper {
    padding-left: 93px;
    // .flash-sales_swiper__slide
    &__slide {
    }
  }

  .swiper {
    width: 100%;
    height: 100%;
  }
</style>
