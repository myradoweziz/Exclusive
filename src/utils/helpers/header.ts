import type { UsersDropdownItems, Icons, Menus } from '../interfaces'

export const ICONS: Icons[] = [
  { id: 0, name: 'wishList', isActive: false },
  { id: 1, name: 'card', isActive: false },
  { id: 2, name: 'user', isActive: true }
]

export const USER_DROPDOWN_ITEMS: UsersDropdownItems[] = [
  { id: 0, icon: 'bigUser', name: 'Manage My Account' },
  { id: 1, icon: 'mallbag', name: 'My Order' },
  { id: 2, icon: 'cancel', name: 'My Cancellations' },
  { id: 3, icon: 'reviews', name: 'My Reviews' },
  { id: 4, icon: 'logout', name: 'Logout' }
]

export const HEADER_MENU: Menus[] = [
  { id: 0, name: 'Home', path: '/' },
  { id: 1, name: 'Contact', path: '/contact' },
  { id: 2, name: 'About', path: '/about' },
  { id: 3, name: 'Sign Up', path: '/sign-up' }
]
