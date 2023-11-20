<script setup lang="ts">
  import { ref } from 'vue'

  import Icon from '@/UI/Icon'

  const day = ref('')
  const hours = ref('')
  const minutes = ref('')
  const seconds = ref('')

  setInterval(() => {
    const date = new Date()
    day.value = date.getDate().toString().padStart(2, '0')
    hours.value = date.getHours().toString().padStart(2, '0')
    minutes.value = date.getMinutes().toString().padStart(2, '0')
    seconds.value = date.getSeconds().toString().padStart(2, '0')
  }, 1000)
</script>

<template>
  <div class="flash-sales__content">
    <div class="flash-sales__title-times">
      <div class="flash-sales__title">Flash Sales</div>
      <div class="flash-sales__times">
        <div class="flash-sales__days days">
          <div class="days__title">Days</div>
          <div class="days__number">{{ day }}</div>
        </div>
        <div class="flash-sales__times-point">
          <icon name="semiClone" />
        </div>
        <div class="flash-sales__hours hours">
          <div class="hours__title">Hours</div>
          <div class="hours__number">{{ hours }}</div>
        </div>
        <div class="flash-sales__times-point">
          <icon name="semiClone" />
        </div>
        <div class="flash-sales__minutes minutes">
          <div class="minutes__title">Minutes</div>
          <div class="minutes__number">{{ minutes }}</div>
        </div>
        <div class="flash-sales__times-point">
          <icon name="semiClone" />
        </div>
        <div class="flash-sales__seconds seconds">
          <div class="seconds__title">Seconds</div>
          <div class="seconds__number">{{ seconds }}</div>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .flash-sales {
    // .flash-sales__content
    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 40px;
    }
    // .flash-sales__title-times
    &__title-times {
      display: flex;
      align-items: center;
      gap: 87px;
    }
    // .flash-sales__title
    &__title {
      color: var(--text-2, #000);
      font-family: Inter;
      font-size: 36px;
      font-weight: 600;
      line-height: 133.333%;
      letter-spacing: 1.44px;
    }
    // .flash-sales__times
    &__times {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    // .flash-sales__days
    &__days {
    }
    // .flash-sales__times-point
    &__times-point {
      padding-top: 20px;
    }
    // .flash-sales__hours
    &__hours {
    }
    // .flash-sales__minutes
    &__minutes {
    }
    // .flash-sales__seconds
    &__seconds {
    }
    // .flash-sales__arrows
    &__arrows {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    // .flash-sales__arrow
    &__arrow {
      padding: 10px;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      background-color: #f5f5f5;
      &:first-child {
        transform: rotate(180deg);
      }
    }
  }
  .days {
    // .days__title
    &__title {
      color: var(--text-2, #000);
      font-family: Poppins;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
    }
    // .days__number
    &__number {
      color: var(--text-2, #000);
      font-family: Inter;
      font-size: 32px;
      font-weight: 700;
      line-height: 93.75%;
      letter-spacing: 1.28px;
    }
  }
  .hours {
    // .hours__title
    &__title {
      color: var(--text-2, #000);
      font-family: Poppins;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
    }
    // .hours__number
    &__number {
      color: var(--text-2, #000);
      font-family: Inter;
      font-size: 32px;
      font-weight: 700;
      line-height: 93.75%;
      letter-spacing: 1.28px;
    }
  }
  .minutes {
    // .minutes__title
    &__title {
      color: var(--text-2, #000);
      font-family: Poppins;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
    }
    // .minutes__number
    &__number {
      color: var(--text-2, #000);
      font-family: Inter;
      font-size: 32px;
      font-weight: 700;
      line-height: 93.75%;
      letter-spacing: 1.28px;
    }
  }
  .seconds {
    // .seconds__title
    &__title {
      color: var(--text-2, #000);
      font-family: Poppins;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
    }
    // .seconds__number
    &__number {
      color: var(--text-2, #000);
      font-family: Inter;
      font-size: 32px;
      font-weight: 700;
      line-height: 93.75%;
      letter-spacing: 1.28px;
    }
  }
</style>
