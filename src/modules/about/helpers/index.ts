import { AboutCounts } from '../types'

export const icons = ['twitter', 'instagram', 'linkedIn']

export const aboutCounts = [
  { id: 0, icon: 'home', count: '10.5k', title: 'Sallers active our site' },
  { id: 1, icon: 'sale', count: '33k', title: 'Monthly Product Sale' },
  { id: 2, icon: 'bag', count: '45.5k', title: 'Customer active in our site' },
  { id: 3, icon: 'moneyBag', count: '25k', title: 'Anual gross sale in our site' }
] as AboutCounts[]

export const pagination = {
  clickable: true
}

export const autoplay = {
  delay: 2000,
  disableOnInteraction: false
}
