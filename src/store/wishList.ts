import { defineStore } from 'pinia'
import type { Product } from '@/utils'

interface WishlistState {
  wishlists: Product[]
}

export const useWishlist = defineStore('wishlists', {
  state: (): WishlistState => {
    return { wishlists: [] }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    addProduct(item: Product) {
      this.wishlists.push(item)
    },
    getProducts() {
      return this.wishlists
    }
  }
})
