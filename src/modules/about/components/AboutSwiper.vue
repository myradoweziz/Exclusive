<script setup lang="ts">
  import Icon from '@/UI/Icon'

  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Pagination, Autoplay } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/pagination'

  import { pagination, autoplay, icons } from '../helpers'

  const modules = [Pagination, Autoplay]
</script>

<template>
  <swiper
    :pagination="pagination"
    :slides-per-view="3"
    :space-between="30"
    :autoplay="autoplay"
    :speed="2300"
    :modules="modules"
    class="mySwiper about-swiper__swiper"
  >
    <swiper-slide v-for="i in 10" :key="i" class="about-swiper__swiper-slide">
      <div class="about-swiper__body">
        <div class="about-swiper__image-block">
          <div class="about-swiper__image">
            <img src="../../../assets/img/tom-cruise.png" alt="" />
          </div>
        </div>
        <div class="about-swiper__title">Tom Cruise</div>
        <div class="about-swiper__mission">Founder & Chairman</div>
        <div class="about-swiper__icons">
          <div v-for="item in icons" :key="item" class="about-swiper__icon">
            <icon :name="item" />
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
  .about-swiper {
    // .about-swiper__swiper

    &__swiper {
      max-width: 1305px;
      margin: 0 auto;
      padding: 0 10px;
    }
    // .about-swiper__swiper-slide
    &__swiper-slide {
    }
    // .about-swiper__body
    &__body {
      padding-bottom: 50px;
    }
    // .about-swiper__image-block
    &__image-block {
      padding: 40px 67px;
      border-radius: 4px;
      background: var(--secondary, #f5f5f5);
    }
    // .about-swiper__image
    &__image {
      img {
        width: 236px;
        height: 391px;
      }
    }
    // .about-swiper__title
    &__title {
      padding-top: 32px;
      padding-bottom: 8px;
      font-family: Inter;
      font-size: 32px;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: 1.28px;
    }
    // .about-swiper__mission
    &__mission {
      font-family: Poppins;
      font-weight: 400;
      line-height: 24px;
      padding-bottom: 16px;
    }
    // .about-swiper__icons
    &__icons {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    // .about-swiper__icon
    &__icon {
    }
  }

  .swiper {
    width: 100%;
    height: 100%;
  }
</style>
