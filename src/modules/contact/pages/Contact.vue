<script setup lang="ts">
  import Icon from '@/UI/Icon'
  import GlobalButton from '@/UI/GlobalButton'
  import PagesPath from '@/components/PagesPath.vue'
</script>

<template>
  <main class="contact">
    <div class="contact__container">
      <pages-path page-title="Contact" />
      <div class="contact__row">
        <div class="contact__call-write">
          <div class="contact__call call">
            <div class="call__title-icon">
              <div class="call__icon">
                <icon name="iconsPhone" />
              </div>
              <div class="call__title">Call To Us</div>
            </div>
            <div class="call__location">We are available 24/7, 7 days a week.</div>
            <div class="call__phone">Phone: +8801611112222</div>
          </div>
          <div class="contact__write write">
            <div class="write__icon-title">
              <div class="write__icon">
                <icon name="email" />
              </div>
              <div class="write__title">Write To US</div>
            </div>
            <div class="write__hours">
              Fill out our form and we will contact <br />
              you within 24 hours.
            </div>
            <div v-for="i in 2" :key="i" class="write__email">Emails: customer@exclusive.com</div>
          </div>
        </div>
        <div class="contact__inputs-btn">
          <div class="contact__inputs">
            <div v-for="i in 3" :key="i" class="contact__input">
              <input type="text" placeholder="Your Name *" />
            </div>
          </div>
          <div class="contact__textarea">
            <textarea placeholder="Your Massage"></textarea>
          </div>
          <div class="contact__btn">
            <global-button title="Send Massage" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .contact {
    padding-top: 100px;
    // .contact__container
    &__container {
      max-width: 1305px;
      margin: 0 auto;
      padding: 0 10px;
    }

    // .contact__row
    &__row {
      display: flex;
      gap: 30px;
    }
    // .contact__call-write
    &__call-write {
      border-radius: 4px;
      background: var(--primary, #fff);
      box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.05);
      padding: 40px 35px 51px 35px;
      min-width: 340px;
    }
    // .contact__call
    &__call {
    }
    // .contact__write
    &__write {
    }
    // .contact__inputs-btn
    &__inputs-btn {
      border-radius: 4px;
      background: var(--primary, #fff);
      box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.05);
      padding: 40px 31px;
      width: 100%;
    }
    // .contact__inputs
    &__inputs {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding-bottom: 32px;
    }
    // .contact__input
    &__input {
      input {
        border-radius: 4px;
        background: var(--secondary, #f5f5f5);
        padding: 13px 16px;
        font-family: Poppins;
        font-weight: 400;
        line-height: 24px;
        min-width: 245px;
      }
    }
    // .contact__textarea
    &__textarea {
      padding-bottom: 32px;
      textarea {
        border-radius: 4px;
        background: var(--secondary, #f5f5f5);
        padding: 13px 16px;
        font-family: Poppins;
        font-weight: 400;
        line-height: 24px;
        resize: none;
        width: 100%;
        min-height: 207px;
      }
    }
    // .contact__btn
    &__btn {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      button {
        border-radius: 4px;
        background: var(--button-2, #db4444);
        padding: 16px 48px;
        color: var(--text, #fafafa);
        font-family: Poppins;
        font-weight: 500;
        line-height: 24px;
      }
    }
  }
  .call {
    // .call__title-icon
    &__title-icon {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    // .call__icon
    &__icon {
    }
    // .call__title
    &__title {
      font-family: Poppins;
      font-weight: 500;
      line-height: 24px;
    }
    // .call__location
    &__location {
      font-family: Poppins;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      padding-top: 24px;
      padding-bottom: 16px;
    }
    // .call__phone
    &__phone {
      font-family: Poppins;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      padding-bottom: 32px;
      border-bottom: 2px solid #ccc;
    }
  }
  .write {
    padding-top: 32px;
    // .write__icon-title
    &__icon-title {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    // .write__icon
    &__icon {
    }
    // .write__title
    &__title {
      font-family: Poppins;
      font-weight: 500;
      line-height: 24px;
    }
    // .write__hours
    &__hours {
      padding-top: 24px;
      font-family: Poppins;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
    }
    // .write__email
    &__email {
      padding-top: 24px;
      font-family: Poppins;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
    }
  }
</style>
