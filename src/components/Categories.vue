<script setup lang="ts">
  import { ref } from 'vue'

  import RedBlockTitle from './RedBlockTitle.vue'
  import Icon from '@/UI/Icon'

  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Autoplay } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/pagination'

  interface CategorySwiperItems {
    id: number
    icon: string
    name: string
  }

  const autoplay = {
    delay: 2000,
    disableOnInteraction: false
  }

  const categorySwiperItems = [
    { id: 0, icon: 'phone', name: 'Phones' },
    { id: 1, icon: 'computer', name: 'Computers' },
    { id: 2, icon: 'smartwatch', name: 'SmartWatch' },
    { id: 3, icon: 'camera', name: 'Camera' },
    { id: 4, icon: 'headPhone', name: 'HeadPhones' },
    { id: 5, icon: 'gamepad', name: 'Gaming' }
  ] as CategorySwiperItems[]

  const categoriesSwiperRef = ref<any>(null)

  const modules = [Autoplay]

  const prevOrNextSlide = (index: number) => {
    index === 1 ? categoriesSwiperRef.value.$el.swiper.slidePrev() : categoriesSwiperRef.value.$el.swiper.slideNext()
  }
</script>

<template>
  <section class="categories">
    <div class="categories__container">
      <div class="categories__row">
        <red-block-title title="Categories" red-title />
        <div class="categories__title-arrows">
          <div class="categories__title">Browse By Category</div>
          <div class="categories__arrows">
            <div v-for="i in 2" :key="i" @click="prevOrNextSlide(i)" class="categories__arrow">
              <icon name="shopArrow" />
            </div>
          </div>
        </div>
        <div class="categories__swiper">
          <swiper
            ref="categoriesSwiperRef"
            :slidesPerView="4.5"
            :speed="2000"
            :spaceBetween="30"
            :autoplay="autoplay"
            :modules="modules"
            class="mySwiper categories__swiper"
          >
            <swiper-slide v-for="item in categorySwiperItems" :key="item.id" class="categories__slide">
              <div class="categories__card">
                <div class="categories__icon">
                  <icon :name="item.icon" />
                </div>
                <div class="categories__title">{{ item.name }}</div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .categories {
    padding-top: 90px;
    // .categories__container
    &__container {
      max-width: 1305px;
      margin: 0 auto;
      padding: 0 10px;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: -80px;
        left: 0;
        width: 100%;
        height: 2px;
        background: #000;
        opacity: 0.2;
      }
    }
    // .categories__row
    &__row {
    }
    // .categories__title-arrows
    &__title-arrows {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 60px;
    }
    // .categories__title
    &__title {
      color: var(--text-2, #000);
      font-family: Inter;
      font-size: 36px;
      font-weight: 600;
      line-height: 133.333%;
      letter-spacing: 1.44px;
    }
    // .categories__arrows
    &__arrows {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    // .categories__arrow
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
    // .categories__swiper
    &__swiper {
    }

    // .categories__slide
    &__slide {
    }
    // .categories__card
    &__card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      padding: 25px;
      cursor: pointer;
      transition: 0.5s all ease;
      &:hover {
        border-radius: 4px;
        background: var(--secondary-2, #db4444);
        box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.05);
        .categories__title,
        .categories__icon {
          color: #fff;
        }
      }
    }
    // .categories__icon
    &__icon {
    }
    // .categories__title
    &__title {
      padding-top: 16px;
      color: var(--text-2, #000);
      font-family: Poppins;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
    }
  }
</style>
