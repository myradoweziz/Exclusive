<script setup lang="ts">
  import Icon from '@/UI/Icon'

  interface Services {
    id: number
    icon: string
    title: string
    desc: string
  }

  const services = [
    { id: 0, icon: 'delivery', title: 'FREE AND FAST DELIVERY', desc: 'Free delivery for all orders over $140' },
    { id: 1, icon: 'customerService', title: 'FREE AND FAST DELIVERY', desc: 'Free delivery for all orders over $140' },
    { id: 2, icon: 'guarantee', title: 'MONEY BACK GUARANTEE', desc: 'We return money within 30 days' }
  ] as Services[]
</script>

<template>
  <section class="services">
    <div class="services__container">
      <div class="services__row">
        <div v-for="item in services" :key="item.id" class="services__service">
          <div class="services__icon">
            <icon :name="item.icon" />
          </div>
          <div class="services__title">{{ item.title }}</div>
          <div class="services__desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .services {
    padding-top: 140px;
    // .services__container
    &__container {
      max-width: 1305px;
      padding: 0 10px;
      margin: 0 auto;
    }
    // .services__row
    &__row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 88px;
    }
    // .services__service
    &__service {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    // .services__icon
    &__icon {
      padding-bottom: 24px;
    }
    // .services__title
    &__title {
      padding-bottom: 8px;
      font-family: Poppins;
      font-size: 20px;
      font-weight: 600;
      line-height: 140%;
    }
    // .services__desc
    &__desc {
      font-family: Poppins;
      font-size: 14px;
      font-weight: 400;
      line-height: 150%;
    }
  }
</style>
