<script setup lang="ts">
  import AboutServices from '../components/AboutServices.vue'
  import AboutSwiper from '../components/AboutSwiper.vue'
  import Services from '@/components/Services.vue'
  import PagesPath from '@/components/PagesPath.vue'

  import { ABOUT_DESCRIPTIONS } from '../helpers'
</script>

<template>
  <main class="about">
    <div class="about__container">
      <pages-path page-title="About" />
    </div>
    <div class="about__story">
      <div class="about__content">
        <div class="about__title">Our Story</div>
        <div class="about__desc">
          <p v-for="item in ABOUT_DESCRIPTIONS" :key="item">{{ item }}</p>
        </div>
      </div>
      <div class="about__image">
        <img src="@/assets/img/two-africanes.png" alt="" />
      </div>
    </div>
    <about-services />
    <about-swiper />
    <services />
  </main>
</template>

<style lang="scss" scoped>
  .about {
    padding-top: 100px;
    // .about__container
    &__container {
      max-width: 1305px;
      margin: 0 auto;
      padding: 0 10px;
    }

    // .about__story
    &__story {
      display: flex;
      align-items: center;
      gap: 75px;
      justify-content: space-between;
      padding-left: 135px;
      padding-bottom: 140px;
    }
    // .about__content
    &__content {
    }
    // .about__title
    &__title {
      font-family: Inter;
      font-size: 54px;
      font-weight: 600;
      line-height: 64px;
      letter-spacing: 3.24px;
      padding-bottom: 40px;
    }
    // .about__desc
    &__desc {
      p {
        font-family: Poppins;
        font-weight: 400;
        line-height: 26px;
        &:not(:last-child) {
          padding-bottom: 24px;
        }
      }
    }
    // .about__image
    &__image {
    }
  }
</style>
