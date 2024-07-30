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
  @import '../../assets/scss/component/flash.sales.content.scss';
</style>
