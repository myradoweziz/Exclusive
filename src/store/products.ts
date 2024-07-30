import { defineStore } from 'pinia'
import type { Product } from '@/utils'

interface ProductState {
  products: Product[]
}

export const useProduct = defineStore('products', {
  state: (): ProductState => {
    return {
      products: [
        {
          id: 0,
          percent: '-44%',
          image: 'gamepad.png',
          title: 'HAVIT HV-G92 Gamepad',
          pay: '$1',
          pay_percent: '$160',
          price: '(65)'
        },
        {
          id: 1,
          percent: '-44%',
          image: 'gamepad.png',
          title: 'HAVIT HV-G92 Gamepad',
          pay: '$2',
          pay_percent: '$160',
          price: '(65)'
        },
        {
          id: 2,
          percent: '-44%',
          image: 'gamepad.png',
          title: 'HAVIT HV-G92 Gamepad',
          pay: '$3',
          pay_percent: '$160',
          price: '(65)'
        },
        {
          id: 3,
          percent: '-44%',
          image: 'gamepad.png',
          title: 'HAVIT HV-G92 Gamepad',
          pay: '$4',
          pay_percent: '$160',
          price: '(65)'
        },
        {
          id: 4,
          percent: '-44%',
          image: 'gamepad.png',
          title: 'HAVIT HV-G92 Gamepad',
          pay: '$5',
          pay_percent: '$160',
          price: '(65)'
        }
      ]
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    getProducts() {
      return this.products
    },
    deleteProduct(index: number) {
      this.products.splice(index, 1)
    }
  }
})
