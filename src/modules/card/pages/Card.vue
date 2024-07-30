<script setup lang="ts">
  import { useRouter } from 'vue-router'

  import CardCoupon from '@/components/CardCoupon.vue'
  import PagesPath from '@/components/PagesPath.vue'
  import GlobalButton from '@/UI/GlobalButton'

  import { CARD_BUTTONS } from '../helpers'

  const router = useRouter()
</script>

<template>
  <section class="card">
    <div class="card__container">
      <pages-path page-title="Card" />
      <div class="card__table">
        <div class="card__row">
          <div class="card__product-title">Product</div>
          <div class="card__product-price">Price</div>
          <div class="card__product-quantity">Quantity</div>
          <div class="card__product-sub-total">Subtotal</div>
        </div>
        <div v-for="i in 2" :key="i" class="card__row">
          <div class="card__product-title-image">
            <div class="card__image">
              <img src="@/assets/img/mini-monitor.png" alt="" />
            </div>
            <div class="card__product-title">LCD Monitor</div>
          </div>
          <div class="card__product-price">$650</div>
          <div class="card__product-quantity">
            <input type="number" value="01" />
          </div>
          <div class="card__product-sub-total">$650</div>
        </div>
      </div>
      <div class="card__buttons">
        <div v-for="(item, index) in CARD_BUTTONS" :key="index" class="card__button">
          <button>{{ item }}</button>
        </div>
      </div>
      <div class="card__coupon-total">
        <card-coupon is-margin />
        <div class="card__total">
          <div class="card__total-title">Cart Total</div>
          <div v-for="i in 3" :key="i" class="card__total-row">
            <div class="card__total-sub-title">Subtotal:</div>
            <div class="card__total-count">$1750</div>
          </div>
          <div @click="router.push('/check-out')" class="card__total-btn">
            <global-button title="Process to checkout" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .card {
    padding-top: 100px;
    // .card__container
    &__container {
      max-width: 1305px;
      margin: 0 auto;
      padding: 0 10px;
    }
    // .card__path
    &__path {
      padding: 80px 0;
      display: flex;
      align-items: center;
      gap: 12px;
      p {
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        opacity: 0.5;
      }
      span {
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
      }
    }
    // .card__table
    &__table {
    }
    // .card__row
    &__row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 200px;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 24px 40px;
      border-radius: 4px;
      background: var(--primary, #fff);
      box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.05);
      margin: 40px 0;
      cursor: pointer;
    }
    // .card__product-title
    &__product-title {
      font-family: Poppins;
      font-weight: 400;
      line-height: 150%;
    }
    // .card__product-price
    &__product-price {
      font-family: Poppins;
      font-weight: 400;
      line-height: 150%;
    }
    // .card__product-quantity
    &__product-quantity {
      font-family: Poppins;
      font-weight: 400;
      line-height: 150%;
      input {
        text-align: center;
        padding: 10px;
        font-family: Poppins;
        font-weight: 400;
        line-height: 150%;
        width: 62px;
        border-radius: 4px;
        border: 1.5px solid rgba(0, 0, 0, 0.4);
      }
    }
    // .card__product-sub-total
    &__product-sub-total {
      font-family: Poppins;
      font-weight: 400;
      line-height: 150%;
    }
    // .card__product-title-image
    &__product-title-image {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    // .card__image
    &__image {
    }
    // .card__buttons
    &__buttons {
      padding-top: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    // .card__button
    &__button {
      button {
        text-align: center;
        background-color: transparent;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        padding: 16px 48px;
        font-family: Poppins;
        font-weight: 500;
        line-height: 150%;
      }
    }

    // .card__coupon-total
    &__coupon-total {
      padding-top: 80px;
      display: flex;
      justify-content: space-between;
    }

    // .card__total
    &__total {
      border-radius: 4px;
      border: 1.5px solid #000;
      padding: 32px 24px;
    }
    // .card__total-title
    &__total-title {
      padding-right: 346px;
      padding-bottom: 8px;
      font-family: Poppins;
      font-size: 20px;
      font-weight: 500;
      line-height: 140%;
    }
    // .card__total-row
    &__total-row {
      margin: 16px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 16px;
      border-bottom: 1px solid #ccc;
    }
    // .card__total-sub-title
    &__total-sub-title {
      font-family: Poppins;
      font-weight: 400;
      line-height: 150%;
    }
    // .card__total-count
    &__total-count {
      font-family: Poppins;
      font-weight: 400;
      line-height: 150%;
    }
    // .card__total-btn
    &__total-btn {
      text-align: center;
      button {
        color: var(--text, #fafafa);
        font-family: Poppins;
        font-weight: 500;
        line-height: 150%;
        padding: 16px 48px;
        border-radius: 4px;
        background: var(--button-2, #db4444);
      }
    }
  }
</style>
