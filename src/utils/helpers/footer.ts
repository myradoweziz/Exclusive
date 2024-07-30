import type { FooterMenu } from '../interfaces'

export const FOOTER_MENU: FooterMenu[] = [
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
]
