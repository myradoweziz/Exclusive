<script setup lang="ts">
  import { MUSIC_DATES } from '@/utils'
</script>

<template>
  <section class="music">
    <div class="music__container">
      <div class="music__row">
        <div class="music__content">
          <div class="music__sub-title">Categories</div>
          <div class="music__title">
            Enhance Your <br />
            Music Experience
          </div>
          <div class="music__times">
            <div v-for="item in MUSIC_DATES" :key="item.id" class="music__time">
              <p>{{ item.count }}</p>
              <span>{{ item.title }}</span>
            </div>
          </div>
          <div class="music__btn">
            <button>Buy Now!</button>
          </div>
        </div>
        <div class="music__image">
          <img src="@/assets/img/music.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .music {
    margin-top: 140px;
    background: var(--button, #000);
    // .music__container
    &__container {
      max-width: 1305px;
      padding: 0 10px;
      margin: 0 auto;
    }
    // .music__row
    &__row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 50px;
    }
    // .music__content
    &__content {
    }
    // .music__sub-title
    &__sub-title {
      color: var(--button-1, #0f6);
      font-family: Poppins;
      font-size: 16px;
      font-weight: 600;
      line-height: 125%;
    }
    // .music__title
    &__title {
      color: var(--text, #fafafa);
      font-family: Inter;
      font-size: 48px;
      font-weight: 600;
      line-height: 125%;
      letter-spacing: 1.92px;
      padding: 32px 0;
    }
    // .music__times
    &__times {
      display: flex;
      align-items: center;
      gap: 24px;
      padding-bottom: 54px;
    }
    // .music__time
    &__time {
      text-align: center;
      padding: 13px 15px;
      background-color: #fff;
      border-radius: 50%;
      cursor: pointer;
      p {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 600;
        line-height: 125%;
      }
      span {
        font-family: Poppins;
        font-size: 11px;
        font-weight: 400;
        line-height: 163.636%;
      }
    }
    // .music__btn
    &__btn {
      button {
        padding: 16px 48px;
        color: var(--text, #fafafa);
        font-family: Poppins;
        font-size: 16px;
        font-weight: 500;
        line-height: 150%;
        border-radius: 4px;
        background: var(--button-1, #0f6);
      }
    }
    // .music__image
    &__image {
    }
  }
</style>
