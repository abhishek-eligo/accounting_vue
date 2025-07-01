import { h } from 'vue'
import * as TablerIcons from '@tabler/icons-vue'

/**
 * Converts `tabler-plus` to `TiPlus`
 */
function kebabToComponentName(name) {
  return 'Ti' + name
    .replace(/^tabler-/, '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

export const tablerIconSet = {
  component: (props) => {
    const { icon } = props
    const componentName = kebabToComponentName(icon)

    const IconComponent = TablerIcons[componentName]

    if (!IconComponent) {
      console.warn(`Tabler icon not found: ${icon}`)
      return null
    }

    return h(IconComponent, {
      size: props.size || 24,
      stroke: 1.5,
    })
  }
}
