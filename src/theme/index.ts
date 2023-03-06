import { ColorMode, extendTheme, Theme } from '@chakra-ui/react'

import { breakpoints } from './breakpoints'
import { components } from './components'

interface StyleOptions {
  theme: Theme
  colorMode: ColorMode
  colorScheme: string
}

const colors = {
  white: {
    'brand-50': 'rgba(255, 255, 255, 0.05);',
    'brand-100': 'rgba(255, 255, 255, 0.1);',
    'brand-150': 'rgba(255, 255, 255, 0.15);',
    'brand-200': 'rgba(255, 255, 255, 0.2);',
    'brand-300': 'rgba(255, 255, 255, 0.3);',
    'brand-400': 'rgba(255, 255, 255, 0.4);',
    'brand-500': 'rgba(255, 255, 255, 0.5);',
    'brand-600': 'rgba(255, 255, 255, 0.6);',
    'brand-700': 'rgba(255, 255, 255, 0.7);',
    'brand-800': 'rgba(255, 255, 255, 0.8);',
    'brand-900': 'rgba(255, 255, 255, 0.9);',
    brand: 'rgba(255, 255, 255, 0.95);',
  },
  blue: {
    'toast-bg': 'linear-gradient(270deg, #004dc0 0%, #46b2ff 100%);'
  }
}

const theme = extendTheme({
  styles: {
    global: (props: StyleOptions) => {
      return {
        body: {
          overflow: 'hidden',
          fontFamily: `VK Sans Display', Arial, Helvetica, Helvetica Neue, sans-serif`,
        },
      }
    },
  },
  breakpoints,
  colors: {
    ...colors,
  },
  components,
})

export default theme
