<script setup lang="ts">
  import PagesPath from '@/components/PagesPath.vue'
  import GlobalButton from '@/UI/GlobalButton'
  import { myAccountInputs, myAccountPlaceholders, myAccountSubTitles, myAccountSecondMenuSubTitles } from '../helpers'
</script>

<template>
  <section class="my-account">
    <div class="my-account__container">
      <div class="my-account__path-welcome">
        <pages-path page-title="My Account" />
        <div class="my-account__welcome">
          <p>Welcome!</p>
          <span>Md Rimel</span>
        </div>
      </div>
      <div class="my-account__row">
        <div class="my-account__sidebar">
          <div class="sidebar">
            <div class="sidebar__title">Manage My Account</div>
            <div v-for="item in myAccountSubTitles" :key="item" class="sidebar__sub-title">{{ item }}</div>
            <div class="sidebar__title">My Orders</div>
            <div v-for="item in myAccountSecondMenuSubTitles" :key="item" class="sidebar__sub-title">{{ item }}</div>
            <div class="sidebar__title">My WishList</div>
          </div>
        </div>
        <div class="my-account__profile">
          <div class="profile">
            <div class="profile__title">Edit Your Profile</div>
            <div class="profile__inputs">
              <div v-for="item in myAccountInputs" :key="item.label" class="profile__input">
                <div class="profile__input-label">{{ item.label }}</div>
                <input type="text" :placeholder="item.placeholder" />
              </div>
            </div>
            <div class="profile__password-changes">
              <div class="profile__password-title">Password Changes</div>
              <div v-for="item in myAccountPlaceholders" :key="item" class="profile__password-input">
                <input type="password" :placeholder="item" />
              </div>
            </div>
            <div class="my-account__save-cancel">
              <div class="my-account__cancel">
                <button>Cancel</button>
              </div>
              <div class="my-account__save">
                <global-button title="Save Changes" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .my-account {
    padding-top: 50px;
    // .my-account__container
    &__container {
      max-width: 1305px;
      margin: 0 auto;
      padding: 0 10px;
    }
    // .my-account__path-welcome
    &__path-welcome {
      padding: 80px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    // .my-account__path
    &__path {
      display: flex;
      align-items: center;
      gap: 12px;
      p {
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        opacity: 0.5;
      }
      span {
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
      }
    }
    // .my-account__welcome
    &__welcome {
      display: flex;
      align-items: center;
      gap: 5px;
      p {
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        opacity: 0.5;
      }
      span {
        color: #db4444;
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
      }
    }
    // .my-account__row
    &__row {
      display: flex;
      justify-content: space-between;
    }
    // .my-account__sidebar
    &__sidebar {
    }
    // .my-account__profile
    &__profile {
    }
    // .my-account__save-cancel
    &__save-cancel {
      padding-top: 24px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 20px;
    }
    // .my-account__cancel
    &__cancel {
      button {
        padding: 16px 48px;
        border-radius: 4px;
        background: transparent;
        border: 1px solid #ccc;
        font-family: Poppins;
        font-weight: 500;
        line-height: 24px;
      }
    }
  }
  .sidebar {
    // .sidebar__title
    &__title {
      font-family: Poppins;
      font-weight: 500;
      line-height: 150%;
      padding-bottom: 16px;
      &:not(:first-child) {
        padding-top: 16px;
      }
    }
    // .sidebar__sub-title
    &__sub-title {
      font-family: Poppins;
      font-weight: 500;
      line-height: 150%;
      opacity: 0.5;
      padding-bottom: 8px;
      padding-left: 30px;
      cursor: pointer;
      &:hover {
        color: #db4444;
        opacity: 1;
      }
    }
  }
  .profile {
    border-radius: 4px;
    background: var(--primary, #fff);
    box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.05);
    padding: 40px 80px;
    min-width: 870px;
    // .profile__title
    &__title {
      color: var(--secondary-2, #db4444);
      font-family: Poppins;
      font-size: 20px;
      font-weight: 500;
      line-height: 140%;
      padding-bottom: 16px;
    }
    // .profile__inputs
    &__inputs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 50px;
      padding-bottom: 24px;
    }
    // .profile__input
    &__input {
      input {
        min-width: 330px;
        padding: 13px 16px;
        border-radius: 4px;
        background: var(--secondary, #f5f5f5);
        font-family: Poppins;
        font-weight: 400;
        line-height: 24px;
      }
    }
    // .profile__input-label
    &__input-label {
      font-family: Poppins;
      font-weight: 400;
      line-height: 24px;
      padding-bottom: 8px;
    }
    // .profile__password-changes
    &__password-changes {
    }
    // .profile__password-title
    &__password-title {
      font-family: Poppins;
      font-weight: 400;
      line-height: 24px;
      padding-bottom: 8px;
    }
    // .profile__password-input
    &__password-input {
      &:not(:first-child) {
        padding-top: 16px;
      }
      input {
        padding: 13px 16px;
        border-radius: 4px;
        background: var(--secondary, #f5f5f5);
        min-width: 710px;
        font-family: Poppins;
        font-weight: 400;
        line-height: 24px;
      }
    }
  }
</style>
