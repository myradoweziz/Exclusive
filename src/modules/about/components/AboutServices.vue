<script setup lang="ts">
  import Icon from '@/UI/Icon'

  import { aboutCounts } from '../helpers'
</script>

<template>
  <section class="about-services">
    <div class="about-services__container">
      <div class="about-services__row">
        <div v-for="item in aboutCounts" :key="item.id" class="about-services__card">
          <div class="icon">
            <div class="about-services__icon-red-blog">
              <div class="about-services__icon-blog">
                <div class="about-services__icon">
                  <icon :name="item.icon" />
                </div>
              </div>
            </div>
          </div>
          <div class="about-services__count">{{ item.count }}</div>
          <div class="about-services__title">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .about-services {
    padding-bottom: 140px;
    // .about-services__container
    &__container {
      max-width: 1305px;
      margin: 0 auto;
      padding: 0 10px;
    }
    // .about-services__row
    &__row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
    }
    // .about-services__card
    &__card {
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      text-align: center;
      padding: 30px;
      cursor: pointer;
      transition: 0.3s all ease-in-out;
      &:hover {
        color: #fff;
        background: var(--secondary-2, #db4444);
        box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.2);
        .about-services__icon-red-blog {
          border: 10px solid #f79494;
        }
        .about-services__icon-blog {
          background-color: #fff;
        }
        .about-services__icon {
          color: #000;
        }
      }
    }
    // .about-services__icon-red-blog
    &__icon-red-blog {
      border: 10px solid #ccc;
      border-radius: 50%;
      width: 80px;
      position: relative;
      z-index: 1;
    }
    // .about-services__icon
    &__icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
      color: #fff;
    }
    // .about-services__icon-blog
    &__icon-blog {
      position: relative;
      z-index: 2;
      padding: 30px;
      border-radius: 50%;
      background: #000;
    }
    // .about-services__count
    &__count {
      padding-top: 24px;
      padding-bottom: 12px;
      font-family: Inter;
      font-size: 32px;
      font-weight: 700;
      line-height: 30px;
      letter-spacing: 1.28px;
    }
    // .about-services__title
    &__title {
      font-family: Poppins;
      font-weight: 400;
      line-height: 24px;
    }
  }
  .icon {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
