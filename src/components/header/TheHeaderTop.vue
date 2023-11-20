<script setup lang="ts">
  import Icon from '@/UI/Icon'
</script>

<template>
  <section class="header-top">
    <div class="header-top__container">
      <div class="header-top__row">
        <div class="header-top__title">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span>ShopNow</span>
        </div>
        <div class="header-top__lang">
          <p>English</p>
          <icon name="arrowBottom" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .header-top {
    background: var(--button, #000);
    // .header-top__container
    &__container {
      max-width: 1305px;
      padding: 12px 10px;
      margin: 0 auto;
    }
    // .header-top__row
    &__row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
    }
    // .header-top__title
    &__title {
      flex: 1 1 auto;
      text-align: center;
      color: var(--text, #fafafa);
      font-size: 14px;
      font-weight: 400;
      font-family: Poppins;
      line-height: 150%;
      span {
        font-family: Poppins;
        font-weight: 600;
        line-height: 171.429%;
        text-decoration-line: underline;
      }
    }
    // .header-top__lang
    &__lang {
      display: flex;
      align-items: center;
      color: var(--text, #fafafa);
      font-size: 14px;
      font-weight: 400;
      line-height: 150%;
      cursor: pointer;
      p {
        font-family: Poppins;
      }
      span {
        transition: 0.3s all ease-in;
      }
      &:hover {
        span {
          transform: rotate(180deg);
        }
      }
    }
  }
</style>
