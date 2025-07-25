// tablerIconHelper.js
// Helper for rendering Tabler icons using Iconify for Vue
import { h } from 'vue';
import { Icon } from '@iconify/vue';
import tablerIcons from '@iconify-json/tabler/icons.json';

/**
 * Render a Tabler icon by name
 * @param {string} name - The Tabler icon name, e.g. 'plus', 'user', etc.
 * @param {object} [props] - Additional props for the Icon component
 * @returns {VNode}
 */
export function renderTablerIcon(name, props = {}) {
  // Tabler icon names in Iconify are like 'tabler:plus', 'tabler:user', etc.
  return h(Icon, { icon: `tabler:${name}`, ...props });
}
