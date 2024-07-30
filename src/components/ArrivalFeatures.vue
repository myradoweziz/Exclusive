<script setup lang="ts">
  import RedBlockTitle from './RedBlockTitle.vue'
</script>

<template>
  <section class="arrival-features">
    <div class="arrival-features__container">
      <red-block-title title="Featured" red-title />
      <div class="arrival-features__title">New Arrival</div>
      <div class="arrival-features__row">
        <div v-for="i in 4" :key="i" class="arrival-features__blog">
          <div class="arrival-features__blog-image">
            <img src="@/assets/img/playstation.png" alt="" />
          </div>
          <div class="arrival-features__content">
            <div class="arrival-features__blog-title">PlayStation 5</div>
            <div class="arrival-features__blog-desc">
              Black and White version of the PS5 <br />
              coming out on sale.
            </div>
            <div class="arrival-features__link">Shop Now</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .arrival-features {
    padding-top: 140px;
    // .arrival-features__container
    &__container {
      max-width: 1305px;
      margin: 0 auto;
      padding: 0 10px;
    }
    // .arrival-features__title
    &__title {
      padding-bottom: 60px;
      font-family: Inter;
      font-size: 36px;
      font-weight: 600;
      line-height: 133.333%;
      letter-spacing: 1.44px;
    }
    // .arrival-features__row
    &__row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 284px);
      gap: 30px;
    }
    // .arrival-features__blog
    &__blog {
      padding: 30px;
      padding-bottom: 0;
      position: relative;
      background-color: #000;
      overflow: hidden;
      cursor: pointer;
      &:hover {
        .arrival-features__blog-image {
          transform: scale(1.3);
        }
      }
      &:first-child {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
      }
      &:nth-child(2) {
        grid-column-start: 3;
        grid-column-end: 5;
      }
    }
    // .arrival-features__blog-image
    &__blog-image {
      width: 100%;
      height: 100%;
      transition: 0.5s all ease-in-out;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
    // .arrival-features__content
    &__content {
      position: absolute;
      bottom: 20px;
      left: 30px;
    }
    // .arrival-features__blog-title
    &__blog-title {
      color: var(--text, #fafafa);
      font-family: Inter;
      font-size: 24px;
      font-weight: 600;
      line-height: 100%;
      letter-spacing: 0.72px;
    }
    // .arrival-features__blog-desc
    &__blog-desc {
      padding-top: 16px;
      padding-bottom: 40px;
      color: var(--text, #fafafa);
      font-family: Poppins;
      font-size: 14px;
      font-weight: 400;
      line-height: 150%;
      text-wrap: balance;
    }
    // .arrival-features__link
    &__link {
      text-decoration: underline;
      color: #fff;
      font-family: Poppins;
      font-weight: 500;
      line-height: 150%;
      padding-bottom: 2px;
    }
  }
</style>
