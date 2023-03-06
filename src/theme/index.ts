import { ColorMode, extendTheme, Theme } from '@chakra-ui/react'

import { breakpoints } from './breakpoints'
import { components } from './components'

interface StyleOptions {
  theme: Theme
  colorMode: ColorMode
  colorScheme: string
}

const colors = {
  gray: {
    'light-brand-50': 'rgba(216, 216, 216, .14);',
    'light-brand-100': 'rgba(216, 216, 216, .28);',
    'light-brand-150': 'rgba(216, 216, 216, .32);',
    'light-brand-200': 'rgba(216, 216, 216, .56);',
  },
  white: {
    'brand-500': '#f5f5f7',
  },
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
