<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  import Icon from '@/UI/Icon'
  import TheHeaderTop from './TheHeaderTop.vue'
  import TheHeaderMenu from './TheHeaderMenu.vue'
  import TheHeaderSearch from './TheHeaderSearch.vue'

  interface Icons {
    id: number
    name: string
    isActive: Boolean
  }

  interface UsersDropdownItems {
    id: number
    icon: string
    name: string
  }

  const icons = [
    { id: 0, name: 'wishList', isActive: false },
    { id: 1, name: 'card', isActive: false },
    { id: 2, name: 'user', isActive: true }
  ] as Icons[]

  const usersDropdownItems = [
    { id: 0, icon: 'bigUser', name: 'Manage My Account' },
    { id: 1, icon: 'mallbag', name: 'My Order' },
    { id: 2, icon: 'cancel', name: 'My Cancellations' },
    { id: 3, icon: 'reviews', name: 'My Reviews' },
    { id: 4, icon: 'logout', name: 'Logout' }
  ] as UsersDropdownItems[]

  const isActive = ref(false)
  const router = useRouter()

  const goWishListOrCard = (index: number) => {
    const icon = document.getElementById('icon') as HTMLElement
    index === 0
      ? router.push('/wish-list')
      : index === 2
      ? (isActive.value = !isActive.value)
      : index === 1
      ? router.push('/card')
      : (isActive.value = false)

    window.addEventListener('click', (event: any) => {
      if (!icon.contains(event.target)) {
        isActive.value = false
      }
    })
  }

  const goMyAccount = (id: number) => {
    router.push(`${id === 0 ? '/my-account' : '/'}`)
  }
</script>

<template>
  <header class="header">
    <div class="header__header-top">
      <the-header-top />
    </div>
    <div class="header__container">
      <div class="header__row">
        <div @click="router.push('/')" class="header__logo">
          <icon name="logo" />
        </div>
        <the-header-menu />
        <div class="header__search-icons">
          <the-header-search />
          <div class="header__icons">
            <div
              v-for="icon in icons"
              :key="icon.id"
              @click.stop="goWishListOrCard(icon.id)"
              id="icon"
              class="header__icon"
            >
              <icon :name="icon.name" />
              <div v-if="icon.isActive && isActive" class="header__user-dropdown user">
                <div class="user__body">
                  <div
                    v-for="item in usersDropdownItems"
                    :key="item.id"
                    @click="goMyAccount(item.id)"
                    class="user__row"
                  >
                    <div class="user__icon">
                      <icon :name="item.icon" />
                    </div>
                    <div class="user__title">{{ item.name }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 99;
    &::after {
      content: '';
      position: absolute;
      bottom: 10px;
      left: 0;
      width: 100%;
      height: 1px;
      opacity: 0.2;
      background-color: #000;
    }
    // .header__header-top
    &__header-top {
    }
    // .header__container
    &__container {
      margin: 0 auto;
      max-width: 1305px;
      padding: 0 10px;
    }
    // .header__row
    &__row {
      padding-top: 47px;
      padding-bottom: 23px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 768px) {
        padding-top: 20px;
      }
    }
    // .header__logo
    &__logo {
      cursor: pointer;
    }
    // .header__search-icons
    &__search-icons {
      display: flex;
      align-items: center;
      gap: 24px;
    }
    // .header__icons
    &__icons {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    // .header__icon
    &__icon {
      cursor: pointer;
      border-radius: 50%;
      padding: 5px;
      transition: 0.3s all ease-out;
      position: relative;
      &:hover {
        color: #fff;
        background-color: #db4444;
      }
    }
    // .header__user-dropdown
    &__user-dropdown {
    }
  }

  .user {
    position: absolute;
    top: 45px;
    left: -210px;
    width: 244px;
    z-index: 99;
    // .user__body
    &__body {
      display: flex;
      flex-direction: column;
      gap: 13px;
      padding: 20px 15px 10px 18px;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(75px);
      color: #fff;
    }
    // .user__row
    &__row {
      display: flex;
      align-items: center;
      padding: 2px;
      gap: 16px;
      transition: 0.3s all ease;
      &:hover {
        background: rgba(255, 255, 255, 0.4);
        border-radius: 5px;
        width: 100%;
      }
    }
    // .user__icon
    &__icon {
      padding: 5px;
      &:nth-child(2) {
        padding-left: 10px;
      }
    }
    // .user__title
    &__title {
      font-family: Poppins;
      font-size: 14px;
      font-weight: 400;
      line-height: 150%;
    }
  }
</style>
