<script setup lang="ts">
  import Icon from '@/UI/Icon'

  interface AccountItem {
    id: number
    name: string
  }

  interface FooterMenu {
    id: number
    title: string
    accountItems: AccountItem[]
  }

  const footerIcons = ['facebook', 'twitter', 'instagram', 'linkedIn']

  const footerMenu = [
    {
      id: 0,
      title: 'Account',
      accountItems: [
        { id: 0, name: 'My Account' },
        { id: 1, name: 'Login / Register' },
        { id: 2, name: 'Cart' },
        { id: 3, name: 'Wishlist' },
        { id: 4, name: 'Shop' }
      ]
    },
    {
      id: 1,
      title: 'Quick Link',
      accountItems: [
        { id: 0, name: 'Privacy Policy' },
        { id: 1, name: 'Terms Of Use' },
        { id: 2, name: 'FAQ' },
        { id: 3, name: 'Contact' }
      ]
    }
  ] as FooterMenu[]
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__row">
        <div class="footer__exclusive exclusive">
          <div class="exclusive__title">Exclusive</div>
          <div class="exclusive__sub-title">Subscribe</div>
          <div class="exclusive__desc">Get 10% off your first order</div>
          <div class="exclusive__input">
            <input type="text" placeholder="Enter your email" />
            <div class="exclusive__icon">
              <icon name="send" />
            </div>
          </div>
        </div>
        <div class="footer__support support">
          <div class="support__title">Support</div>
          <div class="support__location">
            111 Bijoy sarani, Dhaka, <br />
            DH 1515, Bangladesh.
          </div>
          <div class="support__email">exclusive@gmail.com</div>
          <div class="support__numbers">+88015-88888-9999</div>
        </div>
        <div v-for="item in footerMenu" :key="item.id" class="footer__account account">
          <div class="account__title">{{ item.title }}</div>
          <ul class="account__list">
            <li v-for="accountItem in item.accountItems" :key="accountItem.id" class="account__item">
              {{ accountItem.name }}
            </li>
          </ul>
        </div>
        <div class="footer__download-app download-app">
          <div class="download-app__title">Download App</div>
          <div class="download-app__desc">Save $3 with App New User Only</div>
          <div class="download-app__icons">
            <div v-for="item in footerIcons" :key="item" class="download-app__icon">
              <icon :name="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    margin-top: 140px;
    background: #000;
    // .footer__container
    &__container {
      max-width: 1305px;
      padding: 0 10px;
      margin: 0 auto;
    }
    // .footer__row
    &__row {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 87px;
      padding: 42px;
    }
    // .footer__exclusive
    &__exclusive {
    }
    // .footer__support
    &__support {
    }
    // .footer__account
    &__account {
    }
    // .footer__links
    &__links {
    }
    // .footer__download-app
    &__download-app {
    }
  }
  .exclusive {
    // .exclusive__title
    color: var(--text, #fafafa);
    &__title {
      padding-bottom: 24px;
      font-family: Inter;
      font-size: 24px;
      font-weight: 700;
      line-height: 100%;
      letter-spacing: 0.72px;
    }
    // .exclusive__sub-title
    &__sub-title {
      padding-bottom: 24px;
      font-family: Poppins;
      font-size: 20px;
      font-weight: 500;
      line-height: 140%;
    }
    // .exclusive__desc
    &__desc {
      color: var(--text, #fafafa);
      font-family: Poppins;
      font-weight: 400;
      line-height: 150%;
      padding-bottom: 16px;
    }
    // .exclusive__input
    &__input {
      position: relative;
      input {
        padding: 12px 16px;
        padding-right: 43px;
        background-color: transparent;
        border-radius: 4px;
        border: 1.5px solid var(--text, #fafafa);
        color: var(--text, #fafafa);
        font-family: Poppins;
        font-weight: 400;
        line-height: 150%;
      }
    }
    // .exclusive__icon
    &__icon {
      cursor: pointer;
      position: absolute;
      top: 50%;
      right: 0%;
      transform: translate(-50%, -50%);
    }
  }
  .support {
    color: #fafafa;
    width: 175px;
    // .support__title
    &__title {
      padding-bottom: 24px;
      font-family: Inter;
      font-size: 24px;
      font-weight: 700;
      line-height: 100%;
      letter-spacing: 0.72px;
    }
    // .support__location
    &__location {
      font-family: Poppins;
      font-weight: 400;
      line-height: 150%;
    }
    // .support__email
    &__email {
      padding: 16px 0;
      font-family: Poppins;
      font-weight: 400;
      line-height: 150%;
    }
    // .support__numbers
    &__numbers {
      font-family: Poppins;
      font-weight: 400;
      line-height: 150%;
    }
  }
  .account {
    color: var(--text, #fafafa);

    // .account__title
    &__title {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 500;
      line-height: 140%;
      padding-bottom: 24px;
    }
    // .account__list
    &__list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    // .account__item
    &__item {
      color: var(--text, #fafafa);
      font-family: Poppins;
      font-weight: 400;
      line-height: 150%;
    }
  }
  .links {
    color: var(--text, #fafafa);
    // .links__title
    &__title {
      padding-bottom: 24px;
      font-family: Poppins;
      font-size: 20px;
      font-weight: 500;
      line-height: 140%;
    }
    // .links__list
    &__list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    // .links__item
    &__item {
      font-family: Poppins;
      font-weight: 400;
      line-height: 150%;
    }
  }
  .download-app {
    color: var(--text, #fafafa);
    width: 194px;
    // .download-app__title
    &__title {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 500;
      line-height: 140%;
      padding-bottom: 24px;
    }
    // .download-app__desc
    &__desc {
      font-family: Poppins;
      font-size: 12px;
      font-weight: 500;
      line-height: 150%;
      opacity: 0.7;
      padding-bottom: 8px;
    }
    // .download-app__code-icons
    &__code-icons {
    }
    // .download-app__code
    &__code {
    }
    // .download-app__google-apple
    &__google-apple {
    }
    // .download-app__google
    &__google {
    }
    // .download-app__apple
    &__apple {
    }
    // .download-app__icons
    &__icons {
      padding-top: 24px;
      display: flex;
      align-items: center;
      gap: 24px;
    }
    // .download-app__icon
    &__icon {
      cursor: pointer;
    }
  }
</style>
./helpers/footerIcons
