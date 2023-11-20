<script setup lang="ts">
  import { defineProps } from 'vue'

  import GlobalButton from '@/UI/GlobalButton'

  defineProps({
    isMargin: {
      type: Boolean,
      default: () => false
    }
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
  .card {
    // .card__coupon
    &__coupon {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    // .card__coupon-input
    &__coupon-input {
      input {
        font-family: Poppins;
        font-weight: 400;
        line-height: 150%;
        padding: 16px 24px;
        border-radius: 4px;
        border: 1px solid;
      }
    }
  }
  .mt--290 {
    margin-top: -290px;
  }
</style>
