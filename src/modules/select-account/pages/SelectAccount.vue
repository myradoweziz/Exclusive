<script setup lang="ts">
  import RedBlockTitle from '@/components/RedBlockTitle.vue'
  import Icon from '@/UI/Icon'
  import { selectedCardSizes, selectedCardDeliveries } from '../helpers'
</script>

<template>
  <section class="selected-card">
    <div class="selected-card__container">
      <div class="selected-card__path">
        <p>Account / Gaming /</p>
        <span>Havic HV G-92 Gamepad</span>
      </div>
      <div class="selected-card__row">
        <div class="selected-card__images">
          <div class="selected-card__mini-image">
            <img src="@/assets/img/white-gamepad-first.png" alt="" />
          </div>
          <div class="selected-card__mini-image">
            <img src="@/assets/img/white-gamepad-second.png" alt="" />
          </div>
          <div class="selected-card__mini-image">
            <img src="@/assets/img/white-gamepad-third.png" alt="" />
          </div>
          <div class="selected-card__mini-image">
            <img src="@/assets/img/white-gamepad-fours.png" alt="" />
          </div>
        </div>
        <div class="selected-card__image">
          <img src="@/assets/img/white-gamepad.png" alt="" />
        </div>
        <div class="selected-card__content">
          <div class="selected-card__product-title">Havic HV G-92 Gamepad</div>
          <div class="selected-card__stars-reviews">
            <div class="selected-card__stars">
              <div v-for="i in 4" :key="i" class="selected-card__star">
                <icon name="star" />
              </div>
              <div class="selected-card__star">
                <icon name="starDefault" />
              </div>
            </div>
            <div class="selected-card__review">(150 Reviews)</div>
            <div class="selected-card__stock">In Stock</div>
          </div>
          <div class="selected-card__pay">$192.00</div>
          <div class="selected-card__desc">
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install &
            mess free removal Pressure sensitive.
          </div>
          <div class="selected-card__colors">
            <p>Colours:</p>
            <div class="selected-card__color-icons">
              <div class="selected-card__color-icon">
                <icon name="checkedBlue" />
              </div>
              <div class="selected-card__color-icon">
                <icon name="checkedDefault" />
              </div>
            </div>
          </div>
          <div class="selected-card__sizes-title">
            <div class="selected-card__size-title">Size:</div>
            <div class="selected-card__sizes">
              <div v-for="item in selectedCardSizes" :key="item" class="selected-card__size">{{ item }}</div>
            </div>
          </div>
          <div class="selected-card__buy-count-btn-icon">
            <div class="selected-card__buy-count">
              <div class="selected__card-buy-minus">
                <icon name="iconMinus" />
              </div>
              <p>2</p>
              <div class="selected__card-buy-minus">
                <icon name="iconPlus" />
              </div>
            </div>
            <div class="selected-card__btn">
              <button>Buy Now</button>
            </div>
            <div class="selected-card__buy-icon">
              <icon name="wishList" />
            </div>
          </div>
          <div class="selected-card__card">
            <div v-for="item in selectedCardDeliveries" :key="item.icon" class="selected-card__card-row">
              <div class="selected-card__card-icon">
                <icon :name="item.icon" />
              </div>
              <div class="selected-card__card-title-desc">
                <p>{{ item.title }}</p>
                <span>{{ item.desc }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wish-list__row">
        <red-block-title title="Related Item" red-title />
        <div class="wish-list__products">
          <div v-for="i in 4" :key="i" class="wish-list__product product">
            <div class="product__body">
              <div class="product__count-icon">
                <div class="product__count">-35%</div>
                <div class="product__icon">
                  <icon name="flipEye" />
                </div>
              </div>
              <div class="product__image">
                <img src="@/assets/img/laptop.png" alt="" />
              </div>
              <div class="product__cart-btn">
                <button>
                  <icon name="card" />
                  Add To Cart
                </button>
              </div>
            </div>
            <div class="product__content">
              <div class="product__title">RGB liquid CPU Cooler</div>
              <div class="product__pay">
                <p>$960</p>
                <span>$1160</span>
              </div>
              <div class="product__stars-length">
                <div class="product__stars">
                  <icon v-for="i in 5" :key="i" name="star" />
                </div>
                <div class="product__length">(65)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .selected-card {
    padding-top: 140px;
    // .selected-card__container
    &__container {
      max-width: 1305px;
      margin: 0 auto;
      padding: 0 10px;
    }
    // .selected-card__path
    &__path {
      padding-top: 40px;
      padding-bottom: 80px;
      display: flex;
      align-items: center;
      gap: 12px;
      p {
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        opacity: 0.5;
      }
      span {
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
      }
    }
    // .selected-card__row
    &__row {
      display: flex;
      justify-content: space-between;
    }
    // .selected-card__images
    &__images {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 30px;
    }
    // .selected-card__mini-image
    &__mini-image {
      padding: 12px 25px;
      border-radius: 4px;
      background: var(--secondary, #f5f5f5);
      &:not(:first-child) {
        margin-top: 16px;
      }
    }
    // .selected-card__image
    &__image {
      position: relative;
      margin-right: 70px;
      padding: 27px;
      border-radius: 4px;
      background: var(--secondary, #f5f5f5);
      width: 1500px;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    // .selected-card__content
    &__content {
    }
    // .selected-card__product-title
    &__product-title {
      font-family: Inter;
      font-size: 24px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0.72px;
      padding-bottom: 16px;
    }
    // .selected-card__stars-reviews
    &__stars-reviews {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    // .selected-card__stars
    &__stars {
      display: flex;
      align-items: center;
      gap: 3px;
    }
    // .selected-card__star
    &__star {
    }
    // .selected-card__review
    &__review {
      font-family: Poppins;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      opacity: 0.5;
      padding-right: 8px;
      border-right: 2px solid #767373;
    }
    // .selected-card__stock
    &__stock {
      color: var(--button-1, #0f6);
      font-family: Poppins;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      opacity: 0.6;
      padding-bottom: 17px;
    }
    // .selected-card__pay
    &__pay {
      font-family: Inter;
      font-size: 24px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.72px;
      padding-bottom: 24px;
    }
    // .selected-card__desc
    &__desc {
      font-family: Poppins;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      padding-bottom: 24px;
      border-bottom: 2px solid #ccc;
    }
    // .selected-card__colors
    &__colors {
      padding-top: 24px;
      display: flex;
      align-items: center;
      gap: 24px;
      p {
        font-family: Inter;
        font-size: 20px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0.6px;
      }
    }
    // .selected-card__color-icons
    &__color-icons {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    // .selected-card__color-icon
    &__color-icon {
    }
    // .selected-card__sizes-title
    &__sizes-title {
      padding-top: 24px;
      display: flex;
      align-items: center;
      gap: 24px;
    }
    // .selected-card__size-title
    &__size-title {
      font-family: Inter;
      font-size: 20px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0.6px;
    }
    // .selected-card__sizes
    &__sizes {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    // .selected-card__size
    &__size {
      font-family: Poppins;
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.5);
      padding: 6px 10px;
      cursor: pointer;
      &:hover {
        color: #fafafa;
        background-color: #db4444;
      }
    }
    // .selected-card__buy-count-btn-icon
    &__buy-count-btn-icon {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-top: 24px;
    }
    // .selected-card__buy-count
    &__buy-count {
      display: flex;
      align-items: center;
      overflow: hidden;
      cursor: pointer;
      p {
        text-align: center;
        font-family: Poppins;
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
        border-top: 1px solid rgba(0, 0, 0, 0.5);
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        padding: 4px 20px;
      }
    }
    // .selected-card__btn
    &__btn {
      button {
        border-radius: 4px;
        background: var(--button-2, #db4444);
        padding: 8px 48px;
        color: var(--text, #fafafa);
        font-family: Poppins;
        font-weight: 500;
        line-height: 24px;
      }
    }
    // .selected-card__buy-icon
    &__buy-icon {
      cursor: pointer;
      padding: 2px 4px;
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.5);
    }
    // .selected-card__card
    &__card {
      margin-top: 42px;
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.5);
    }
    // .selected-card__card-row
    &__card-row {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 24px 25px 16px 16px;
      &:first-child {
        border-bottom: 2px solid #ccc;
      }
    }
    // .selected-card__card-icon
    &__card-icon {
    }
    // .selected-card__card-title-desc
    &__card-title-desc {
      p {
        font-family: Poppins;
        font-weight: 500;
        line-height: 24px;
        padding-bottom: 8px;
      }
      span {
        font-family: Poppins;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        text-decoration-line: underline;
      }
    }
  }
  .selected {
    // .selected__card-buy-minus
    &__card-buy-minus {
      border-radius: 4px 0px 0px 4px;
      border: 1px solid rgba(0, 0, 0, 0.5);
      padding: 6px 10px;
      &:not(:first-child) {
        padding: 7px 10px;
        border: none;
        border-radius: 0px 4px 4px 0px;
        background: var(--secondary-2, #db4444);
      }
    }
  }
  .wish-list {
    padding-top: 150px;
    // .wish-list__container
    &__container {
      max-width: 1305px;
      margin: 0 auto;
      padding: 0 10px;
    }
    // .wish-list__row
    &__row {
      padding-top: 80px;
    }

    // .wish-list__products
    &__products {
      padding-top: 60px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
    }
    // .wish-list__product
    &__product {
    }
    // .wish-list__title-block
    &__title-block {
      display: flex;
      align-items: center;
      gap: 16px;
      padding-bottom: 24px;
    }
    // .wish-list__red-block
    &__red-block {
      width: 20px;
      height: 40px;
      border-radius: 5px;
      background-color: #db4444;
    }
  }

  .product {
    // .product__body
    &__body {
      border-radius: 4px;
      background: var(--secondary, #f5f5f5);
      padding: 12px;
      overflow: hidden;
      position: relative;
      cursor: pointer;
      aspect-ratio: 1/1;
      &:hover {
        .product__icon,
        .product__cart-btn {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
    // .product__count-icon
    &__count-icon {
    }
    // .product__count
    &__count {
      width: 55px;
      border-radius: 4px;
      background: var(--secondary-2, #db4444);
      padding: 4px 12px;
      color: var(--text, #fafafa);
      font-family: Poppins;
      font-size: 12px;
      font-weight: 400;
      line-height: 150%;
    }
    // .product__icon
    &__icon {
      position: absolute;
      top: 10px;
      right: 20px;
      background-color: #fff;
      border-radius: 50%;
      padding: 5px;
      transform: translateY(-50px);
      transition: 0.4s all ease-in;
      opacity: 0;
      cursor: pointer;
    }
    // .product__image
    &__image {
      padding-top: 30px;
      text-align: center;
    }
    // .product__cart-btn
    &__cart-btn {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      transform: translateY(60px);
      opacity: 0;
      transition: 0.4s all ease;
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        background: #000;
        padding: 12px;
        gap: 8px;
        width: 100%;
        font-family: Poppins;
        font-size: 12px;
        font-weight: 400;
        line-height: 150%;
      }
    }
    // .product__content
    &__content {
      padding-top: 16px;
    }
    // .product__title
    &__title {
      padding-bottom: 8px;
      font-family: Poppins;
      font-weight: 500;
      line-height: 150%;
    }
    // .product__pay
    &__pay {
      display: flex;
      align-items: center;
      gap: 12px;
      p {
        color: var(--secondary-2, #db4444);
        font-family: Poppins;
        font-weight: 500;
        line-height: 150%;
      }
      span {
        font-size: 16px;
        font-weight: 500;
        line-height: 150%;
        text-decoration: line-through;
        opacity: 0.6;
      }
    }
    // .product__stars-length
    &__stars-length {
      padding-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    // .product__stars
    &__stars {
      display: flex;
      align-items: center;
      gap: 3px;
    }
    // .product__length
    &__length {
      font-family: Poppins;
      font-size: 14px;
      font-weight: 600;
      line-height: 150%;
      opacity: 0.5;
    }
  }
</style>
