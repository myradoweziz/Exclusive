<script setup lang="ts">
  import Icon from '@/UI/Icon'
  import RedBlockTitle from '@/components/RedBlockTitle.vue'
</script>

<template>
  <main class="wish-list">
    <div class="wish-list__container">
      <div class="wish-list__row">
        <div class="wish-list__title-btn">
          <div class="wish-list__title">Wishlist (4)</div>
          <div class="wish-list__btn">
            <button>Move All To Bag</button>
          </div>
        </div>
        <div class="wish-list__products">
          <div v-for="i in 4" :key="i" class="wish-list__product product">
            <div class="product__body">
              <div class="product__count-icon">
                <div class="product__count">-35%</div>
                <div class="product__icon">
                  <icon name="delete" />
                </div>
              </div>
              <div class="product__image">
                <img src="@/assets/img/bag.png" alt="" />
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
      <div class="wish-list__row">
        <div class="wish-list__title-btn">
          <red-block-title title="Just For You" />
          <div class="wish-list__btn">
            <button>See All</button>
          </div>
        </div>
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
  </main>
</template>

<style lang="scss" scoped>
  .wish-list {
    padding-top: 100px;
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
    // .wish-list__title-btn
    &__title-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__title {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 400;
      line-height: 130%;
    }
    // .wish-list__btn
    &__btn {
      button {
        background-color: transparent;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        padding: 16px 48px;
        font-family: Poppins;
        font-weight: 500;
        line-height: 150%;
      }
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
