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

  import { AUTOPLAY, SWIPER_ICONS } from '@/utils'

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
      :autoplay="AUTOPLAY"
      :modules="modules"
      class="mySwiper flash-sales_swiper"
    >
      <swiper-slide v-for="i in 16" :key="i" class="flash-sales_swiper__slide">
        <div class="flash-sales__body">
          <div class="flash-sales__image-block">
            <div class="flash-sales__count-icons">
              <div class="flash-sales__count">-40%</div>
              <div class="flash-sales__icons">
                <div v-for="(item, index) in SWIPER_ICONS" :key="index" class="flash-sales__icon">
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
  @import '../../assets/scss/component/main.flash.sales.scss';
</style>
@/utils/helpers
