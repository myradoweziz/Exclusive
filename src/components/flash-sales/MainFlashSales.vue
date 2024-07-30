<script setup lang="ts">
  import { ref } from 'vue'

  import FlashSalesContent from '@/components/flash-sales/FlashSalesContent.vue'
  import GlobalButton from '@/UI/GlobalButton'
  import RedBlockTitle from '@/components/RedBlockTitle.vue'
  import Observer from '../Observer.vue'
  import Icon from '@/UI/Icon'

  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Autoplay } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/pagination'

  import { AUTOPLAY, SWIPER_ICONS, type Product } from '@/utils'

  import { useWishlist } from '@/store/wishList'
  import { useProduct } from '@/store/products'
  import { computed } from 'vue'

  const swiperRef = ref<any>(null)
  const store = useWishlist()

  const productStore = useProduct()

  const modules = [Autoplay]

  const showSales = ref<boolean>(false)

  const showedFlashSales = () => {
    showSales.value = true
  }

  const prevOrNextSlide = (index: number) => {
    index === 1 ? swiperRef.value.$el.swiper.slidePrev() : swiperRef.value.$el.swiper.slideNext()
  }

  const flashSales = computed(() => {
    return productStore.getProducts()
  })

  const getImageUrl = (imageName: string) => {
    const path = new URL(`../../assets/img/${imageName}`, import.meta.url).href
    return path
  }

  const addWishList = (item: Product, index: number) => {
    store.addProduct(item)
    productStore.deleteProduct(index)
  }
</script>

<template>
  <section :class="['flash-sales', { showed: showSales }]">
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
    <Observer @intersect="showedFlashSales" />
    <swiper
      ref="swiperRef"
      :slidesPerView="4.5"
      :speed="2000"
      :spaceBetween="30"
      :autoplay="AUTOPLAY"
      :modules="modules"
      class="mySwiper flash-sales_swiper"
    >
      <swiper-slide v-for="(item, index) in flashSales" :key="index" class="flash-sales_swiper__slide">
        <div class="flash-sales__body">
          <div class="flash-sales__image-block">
            <div class="flash-sales__count-icons">
              <div class="flash-sales__count">{{ item.percent }}</div>
              <div class="flash-sales__icons">
                <div v-for="(item, index) in SWIPER_ICONS" :key="index" class="flash-sales__icon">
                  <icon :name="item" />
                </div>
              </div>
            </div>
            <div class="flash-sales__image">
              <img :src="getImageUrl(item.image)" alt="" />
            </div>
            <div @click="addWishList(item, index)" class="flash-sales__btn-cart">Add to cart</div>
          </div>
          <div class="flash-sales__status">
            <div class="flash-sales__product-name">{{ item.title }}</div>
            <div class="flash-sales__product-count">
              <p>{{ item.pay }}</p>
              <span>{{ item.pay_percent }}</span>
            </div>
            <div class="flash-sales__stars-number">
              <div class="flash-sales__stars">
                <icon v-for="i in 5" :key="i" name="star" />
              </div>
              <div class="flash-sales__number">{{ item.price }}</div>
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
