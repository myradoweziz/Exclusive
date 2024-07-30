<script setup lang="ts">
  import { ref } from 'vue'

  import Icon from '@/UI/Icon'
  import GlobalButton from '@/UI/GlobalButton'

  import { SIGN_UP_INPUTS } from '../helpers'

  const isActive = ref(true)
</script>

<template>
  <section class="sign-up">
    <div class="sign-up__row">
      <div class="sign-up__image">
        <img src="@/assets/img/create.png" alt="" />
      </div>
      <div class="sign-up__create-account">
        <div class="sign-up__title">Create an account</div>
        <div class="sign-up__enter">Enter your details below</div>
        <div class="sign-up__inputs">
          <div v-if="isActive" class="sign-up__input">
            <input type="text" placeholder="Name" />
          </div>
          <div v-for="item in SIGN_UP_INPUTS" :key="item.type" class="sign-up__input">
            <input :type="item.type" :placeholder="item.placeholder" />
          </div>
        </div>
        <div v-if="isActive" @click="isActive = false" class="sign-up__btn">
          <global-button title="Create Account" />
        </div>
        <div v-if="isActive" class="sign-up__gmail">
          <button>
            <icon name="gmail" />
            Sign up with Google
          </button>
        </div>
        <div v-if="isActive" class="sign-up__question-btn">
          <div class="sign-up__question">Already have account?</div>
          <div class="sign-up__log-in">Log in</div>
        </div>
        <div v-else class="sign-up__login">
          <div class="sign-up__login-btn">
            <global-button title="Log In" />
          </div>
          <div class="sign-up__forget-password">Forget Password?</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .sign-up {
    padding-top: 100px;
    // .sign-up__row
    &__row {
      padding-top: 100px;
      display: flex;
      gap: 129px;
    }
    // .sign-up__image
    &__image {
    }
    // .sign-up__create-account
    &__create-account {
      padding-top: 125px;
    }
    // .sign-up__title
    &__title {
      padding-bottom: 24px;
      font-family: Inter;
      font-size: 36px;
      font-weight: 500;
      line-height: 83.333%;
      letter-spacing: 1.44px;
    }
    // .sign-up__enter
    &__enter {
      padding-bottom: 48px;
      font-family: Poppins;
      font-weight: 400;
      line-height: 150%;
    }
    // .sign-up__inputs
    &__inputs {
      padding-bottom: 40px;
    }
    // .sign-up__input
    &__input {
      input {
        position: relative;
        padding: 8px;
        font-family: Poppins;
        font-weight: 400;
        line-height: 150%;
        border-bottom: 1px solid #ccc;
        width: 370px;
      }
      &:not(:first-child) {
        padding-top: 40px;
      }
    }
    // .sign-up__btn
    &__btn {
      padding-bottom: 16px;
      button {
        padding: 16px 122px;
        color: var(--text, #fafafa);
        font-family: Poppins;
        font-weight: 500;
        line-height: 150%;
        text-align: center;
        border-radius: 4px;
        background: var(--button-2, #db4444);
      }
    }
    // .sign-up__gmail
    &__gmail {
      padding-bottom: 34px;
      width: 100%;
      button {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 16px 86px;
        font-family: Poppins;
        font-weight: 500;
        line-height: 150%;
        text-align: center;
        background-color: transparent;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.4);
      }
    }
    // .sign-up__question-btn
    &__question-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
    }
    // .sign-up__question
    &__question {
      font-family: Poppins;
      font-weight: 400;
      line-height: 150%;
      opacity: 0.7;
    }
    // .sign-up__log-in
    &__log-in {
      opacity: 0.7;
      font-family: Poppins;
      font-weight: 500;
      line-height: 150%;
    }
    // .sign-up__login
    &__login {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    // .sign-up__forget-password
    &__forget-password {
      color: var(--secondary-2, #db4444);
      font-family: Poppins;
      font-weight: 400;
      line-height: 150%;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
