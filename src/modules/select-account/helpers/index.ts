import { SelectedCardDeliveries } from '../types'

export const selectedCardSizes = ['XS', 'S', 'M', 'L', 'Xl']

export const selectedCardDeliveries = [
  { id: 0, icon: 'freeDelivery', title: 'Free Delivery', desc: 'Enter your postal code for Delivery Availability' },
  { id: 1, icon: 'iconReturn', title: 'Return Delivery', desc: 'Free 30 Days Delivery Returns. Details' }
] as SelectedCardDeliveries[]
