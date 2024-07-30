import type { VueElement } from 'vue'

export enum AppLayoutsEnum {
  default = 'default'
}

export const AppLayoutToFileMap: Record<AppLayoutsEnum, string> = {
  default: 'Default.vue'
}

declare module 'vue-router' {
  interface RouteMeta {
    layout?: AppLayoutsEnum
    layoutComponent?: VueElement
  }
}
