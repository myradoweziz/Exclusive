<script setup lang="ts">
  import MainBanner from '@/components/main-banner/MainBanner.vue'
  import MainFlashSales from '@/components/flash-sales/MainFlashSales.vue'
  import Categories from '@/components/Categories.vue'
  import CategoryMusic from '@/components/CategoryMusic.vue'
  import OurProducts from '@/components/products/OurProducts.vue'
  import SellingProducts from '@/components/SellingProducts.vue'
  import ArrivalFeatures from '@/components/ArrivalFeatures.vue'
  import Services from '@/components/Services.vue'
</script>

<template>
  <section class="home">
    <div class="home__banner">
      <main-banner />
    </div>
    <div class="home__flash-sales">
      <main-flash-sales />
    </div>
    <div class="home__categories">
      <categories />
    </div>
    <div class="home__selling-products pt-150">
      <selling-products />
    </div>
    <div class="home__music">
      <category-music />
    </div>
    <div class="home__products">
      <our-products />
    </div>
    <div class="home__arrival">
      <arrival-features />
    </div>
    <div class="home__services">
      <services />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .pt-150 {
    padding-top: 150px;
  }
</style>
