import type { CardDelivery } from '../types'

export const CARD_SIZES: string[] = ['XS', 'S', 'M', 'L', 'Xl']

export const CARD_COLOR_ICONS: string[] = ['checkedBlue', 'checkedDefault']

export const CARD_DELIVERIES: CardDelivery[] = [
  { id: 0, icon: 'freeDelivery', title: 'Free Delivery', desc: 'Enter your postal code for Delivery Availability' },
  { id: 1, icon: 'iconReturn', title: 'Return Delivery', desc: 'Free 30 Days Delivery Returns. Details' }
]
