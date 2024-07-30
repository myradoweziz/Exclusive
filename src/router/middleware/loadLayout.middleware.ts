import type { RouteLocationNormalized } from 'vue-router'
import { AppLayoutsEnum, AppLayoutToFileMap } from '@/types'

export async function loadLayouMiddleware(route: RouteLocationNormalized): Promise<void> {
  const { layout } = route.meta

  const normalizedLayoutName = layout || AppLayoutsEnum.default
  const fileName = AppLayoutToFileMap[normalizedLayoutName]
  const fileNameWithoutExtentsion = fileName.split('.vue')[0]

  const component = await import(`@/layouts/${fileNameWithoutExtentsion}.vue`)
  route.meta.layoutComponent = component.default
}
