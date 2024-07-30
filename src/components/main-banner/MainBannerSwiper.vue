<script setup lang="ts">
  import Icon from '@/UI/Icon'

  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Autoplay } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/pagination'

  import { AUTOPLAY } from '@/utils'

  const modules = [Autoplay]
</script>

<template>
  <swiper :autoplay="AUTOPLAY" :speed="2300" :modules="modules" class="mySwiper main-banner__swiper">
    <swiper-slide v-for="i in 5" :key="i" class="main-banner__swiper-slide">
      <div class="main-banner__swiper-row">
        <div class="main-banner__content">
          <div class="main-banner__apple">
            <icon name="apple" />
            <p>iPhone 14 Series</p>
          </div>
          <div class="main-banner__title">
            Up to 10% <br />
            off Voucher
          </div>
          <div class="main-banner__btn">
            <p>Shop Now</p>
            <icon name="shopArrow" />
          </div>
        </div>
        <div class="main-banner__image">
          <img src="@/assets/img/iphone.png" alt="" />
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
  .main-banner {
    // .main-banner__swiper
    &__swiper {
      margin-left: 70px;
    }
    // .main-banner__swiper-slide
    &__swiper-slide {
      padding: 60px;
      padding-right: 0;
    }
    // .main-banner__swiper-row
    &__swiper-row {
      display: flex;
      justify-content: space-between;
    }
    // .main-banner__content
    &__content {
    }
    // .main-banner__apple
    &__apple {
      display: flex;
      align-items: center;
      gap: 24px;
      padding-bottom: 20px;
      transition: 3s all ease-in-out;
      opacity: 0;
      transform: translateX(300px);
      p {
        color: var(--text, #fafafa);
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
      }
    }
    // .main-banner__title
    &__title {
      padding-bottom: 22px;
      color: var(--text, #fafafa);
      font-family: Inter;
      font-size: 65px;
      font-weight: 600;
      line-height: 125%;
      letter-spacing: 1.92px;
      transition: 3.5s all ease-in-out;
      opacity: 0;
      transform: translateX(300px);
    }
    // .main-banner__btn
    &__btn {
      display: flex;
      align-items: center;
      gap: 10px;
      transition: 4s all ease-in-out;
      opacity: 0;
      transform: translateX(300px);
      p {
        color: var(--text, #fafafa);
        font-family: Poppins;
        font-size: 16px;
        font-weight: 500;
        line-height: 150%;
      }
    }
    // .main-banner__image
    &__image {
      opacity: 0;
      transform: translateX(300px);
      transition: 4s all ease-out;
    }
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background: #000;
    color: #fff;
  }
  .swiper-slide-active {
    .main-banner__title,
    .main-banner__apple,
    .main-banner__btn,
    .main-banner__image {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  .swiper-slide {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
