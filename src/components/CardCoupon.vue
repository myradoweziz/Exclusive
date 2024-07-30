<script setup lang="ts">
  import GlobalButton from '@/UI/GlobalButton'

  withDefaults(defineProps<{ isMargin?: boolean }>(), {
    isMargin: false
  })
</script>
<template>
  <div :class="['card__coupon', { 'mt--290': isMargin }]">
    <div class="card__coupon-input">
      <input type="text" placeholder="Coupon Code" />
    </div>
    <div class="card__coupon-btn">
      <global-button title="Apply Coupon" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/scss/component/card.coupon.scss';
</style>
