<script setup lang="ts">
  import CardCoupon from '@/components/CardCoupon.vue'
  import Icon from '@/UI/Icon'
  import GlobalButton from '@/UI/GlobalButton'

  const checkOutInputs = [
    'First Name*',
    'Company Name',
    'Street Address*',
    'Town/City*',
    'Phone Number*',
    'Email Address'
  ]
</script>

<template>
  <section class="checkout">
    <div class="checkout__container">
      <div class="checkout__path">
        <p>Account / My / Account / Product / View / Cart</p>
        <span>CheckOut</span>
      </div>
      <div class="checkout__row">
        <div class="checkout__columns">
          <div class="checkout__title">Billing Details</div>
          <div class="checkout__inputs">
            <div v-for="item in checkOutInputs" :key="item" class="checkout__input">
              <div class="checkout__input-label">{{ item }}</div>
              <input type="text" />
            </div>
          </div>
          <div class="checkout__checkbox">
            <div class="checkout__checkbox-icon">
              <icon name="checked" />
            </div>
            <p>Save this information for faster check-out next time</p>
          </div>
        </div>
        <div class="checkout__content">
          <div class="checkout__games-utils">
            <div class="checkout__game-title">
              <img src="@/assets/img/small-gamepad.png" alt="" />
              <p>LCD Monitor</p>
            </div>
            <div class="checkout__game-count">$650</div>
          </div>
          <div class="checkout__games-utils">
            <div class="checkout__game-title">
              <img src="@/assets/img/mini-monitor.png" alt="" />
              <p>H1 Gamepad</p>
            </div>
            <div class="checkout__game-count">$1150</div>
          </div>
          <div v-for="i in 2" :key="i" class="checkout__totals">
            <div class="checkout__total-title">Subtotal:</div>
            <div class="checkout__total-count">$1750</div>
          </div>
          <div class="checkout__total">
            <p>Total:</p>
            <div class="checkout__total-count">$1750</div>
          </div>
          <div class="checkout__bank-icons">
            <div class="checkout__bank">
              <div class="checkout__bank-icon">
                <icon name="unChecked" />
              </div>
              <p>Bank</p>
            </div>
            <div class="checkout__icons">
              <div class="checkout__icon">
                <img src="@/assets/img/bKash.png" alt="" />
              </div>
              <div class="checkout__icon">
                <img src="@/assets/img/visa.png" alt="" />
              </div>
              <div class="checkout__icon">
                <img src="@/assets/img/mastercard.png" alt="" />
              </div>
              <div class="checkout__icon">
                <img src="@/assets/img/naGad.png" alt="" />
              </div>
            </div>
          </div>
          <div class="checkout__cash">
            <div class="checkout__cash-icon">
              <icon name="checkedBlack" />
            </div>
            <p>Cash on delivery</p>
          </div>
          <div class="checkout__coupon">
            <card-coupon />
          </div>
          <div class="checkout__place-btn">
            <global-button title="Place Order" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .checkout {
    padding-top: 100px;
    // .checkout__container
    &__container {
      max-width: 1305px;
      margin: 0 auto;
      padding: 0 10px;
    }
    // .checkout__path
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
    // .checkout__row
    &__row {
      display: flex;
      justify-content: space-between;
    }
    // .checkout__columns
    &__columns {
    }
    // .checkout__title
    &__title {
      font-family: Inter;
      font-size: 36px;
      font-weight: 500;
      line-height: 83.333%;
      letter-spacing: 1.44px;
      padding-bottom: 16px;
    }
    // .checkout__inputs
    &__inputs {
    }
    // .checkout__input
    &__input {
      padding: 32px 0;
      input {
        padding: 17px 12px;
        width: 470px;
        border-radius: 4px;
        background: var(--secondary, #f5f5f5);
        font-family: Inter;
        font-size: 12px;
        font-weight: 500;
        line-height: 83.333%;
        letter-spacing: 1.44px;
      }
    }
    // .checkout__input-label
    &__input-label {
      font-family: Poppins;
      font-weight: 400;
      line-height: 150%;
      opacity: 0.4;
      padding-bottom: 8px;
    }
    // .checkout__checkbox
    &__checkbox {
      display: flex;
      align-items: center;
      gap: 16px;
      p {
        font-family: Poppins;
        font-weight: 400;
        line-height: 150%;
      }
    }
    // .checkout__checkbox-icon
    &__checkbox-icon {
    }
    // .checkout__content
    &__content {
      margin-top: 100px;
    }
    // .checkout__games-utils
    &__games-utils {
      display: flex;
      align-items: center;
      gap: 210px;
      padding-bottom: 32px;
    }
    // .checkout__game-title
    &__game-title {
      display: flex;
      align-items: center;
      gap: 24px;
      p {
        font-family: Poppins;
        font-weight: 400;
        line-height: 150%;
      }
    }
    // .checkout__game-count
    &__game-count {
      font-family: Poppins;
      font-weight: 400;
      line-height: 150%;
    }
    // .checkout__totals
    &__totals {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 0;
      border-bottom: 2px solid #ccc;
    }
    // .checkout__total-title
    &__total-title {
      font-family: Poppins;
      font-weight: 400;
      line-height: 150%;
    }
    // .checkout__total-count
    &__total-count {
      font-family: Poppins;
      font-weight: 400;
      line-height: 150%;
    }
    // .checkout__total
    &__total {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 16px;
      margin-bottom: 32px;
      p {
        font-family: Poppins;
        font-weight: 400;
        line-height: 150%;
      }
    }
    // .checkout__bank-icons
    &__bank-icons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 32px;
    }
    // .checkout__bank
    &__bank {
      display: flex;
      align-items: center;
      gap: 16px;
      p {
        font-family: Poppins;
        font-weight: 400;
        line-height: 150%;
      }
    }
    // .checkout__bank-icon
    &__bank-icon {
    }
    // .checkout__icons
    &__icons {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    // .checkout__icon
    &__icon {
    }
    // .checkout__cash
    &__cash {
      display: flex;
      align-items: center;
      gap: 16px;
      padding-bottom: 32px;
      p {
        font-family: Poppins;
        font-weight: 400;
        line-height: 150%;
      }
    }
    // .checkout__cash-icon
    &__cash-icon {
    }

    // .checkout__place-btn
    &__place-btn {
      margin-top: 32px;
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
