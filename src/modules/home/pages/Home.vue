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
  <main class="main">
    <div class="main__banner">
      <main-banner />
    </div>
    <div class="main__flash-sales">
      <main-flash-sales />
    </div>
    <div class="main__categories">
      <categories />
    </div>
    <div class="main__selling-products pt-150">
      <selling-products />
    </div>
    <div class="main__music">
      <category-music />
    </div>
    <div class="main__products">
      <our-products />
    </div>
    <div class="main__arrival">
      <arrival-features />
    </div>
    <div class="main__services">
      <services />
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .pt-150 {
    padding-top: 150px;
  }
</style>
