import type { CategoryItem, MusicDate } from '../interfaces'

export const CATEGORY_ITEMS: CategoryItem[] = [
  { id: 0, icon: 'phone', name: 'Phones' },
  { id: 1, icon: 'computer', name: 'Computers' },
  { id: 2, icon: 'smartwatch', name: 'SmartWatch' },
  { id: 3, icon: 'camera', name: 'Camera' },
  { id: 4, icon: 'headPhone', name: 'HeadPhones' },
  { id: 5, icon: 'gamepad', name: 'Gaming' }
]

export const MUSIC_DATES: MusicDate[] = [
  { id: 0, count: '23', title: 'Hours' },
  { id: 1, count: '05', title: 'Days' },
  { id: 2, count: '59', title: 'Minutes' },
  { id: 3, count: '35', title: 'Seconds' }
]
