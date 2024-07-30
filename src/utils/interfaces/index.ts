export interface Icons {
  id: number
  name: string
  isActive: Boolean
}

export interface UsersDropdownItems {
  id: number
  icon: string
  name: string
}

export interface Menus {
  id: number
  name: string
  path: string
}

export interface SidebarItem {
  id: number
  name: string
  arrow?: Boolean
}

export interface CategoryItem {
  id: number
  icon: string
  name: string
}

export interface MusicDate {
  id: number
  count: string
  title: string
}

export interface Service {
  id: number
  icon: string
  title: string
  desc: string
}

interface AccountItem {
  id: number
  name: string
}

export interface FooterMenu {
  id: number
  title: string
  accountItems: AccountItem[]
}

export interface Product {
  id: number
  percent: string
  image: string
  title: string
  pay: string
  pay_percent: string
  price: string
}
