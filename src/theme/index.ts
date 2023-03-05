import { ColorMode, extendTheme, HTMLChakraProps, StyleConfig, SystemStyleInterpolation, Theme, ThemingProps } from '@chakra-ui/react'
import { ButtonTheme } from './ButtonTheme'
import { InputTheme } from './InputTheme'
import { LinkTheme } from './LinkTheme'

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
    global: {
      body: {
        overflow: 'hidden',
        fontFamily: `VK Sans Display', Arial, Helvetica, Helvetica Neue, sans-serif`
      },
    },
  },
  colors: {
    ...colors,
  },
  components: {
    Link: LinkTheme,
    Input: InputTheme,
    Button: ButtonTheme,
    ThemingHeaderWrapper: {
      baseStyle: (options: StyleOptions): HTMLChakraProps<'div'> & ThemingProps => {
        return {
          width: '100%',
          background: '#000',
          color: '#fff',
          zIndex: options.theme.zIndices.sticky,
          position: 'sticky'
        }
      },
    },
    ThemingHeader: {
      baseStyle: (options: StyleOptions): HTMLChakraProps<'div'> & ThemingProps => {
        return {
          height: '100%',
          maxWidth: '100%',
          backgroundColor: 'gray.light-brand-50',
        }
      },
    },
    ThemingContent: {
      baseStyle: (options: StyleOptions): HTMLChakraProps<'div'> & ThemingProps => {
        return {
          width: '100%',
          maxWidth: '7xl',
          margin: 'auto',
        }
      },
    },
    ThemingScroll: {
      baseStyle(options: StyleOptions) {
        return {
          overflow: 'overlay',
          '&::-webkit-scrollbar': {
            backgroundColor: ' rgba(0,0,0,0)',
            width: '16px',
            height: '16px',
            zIndex: '999999',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'rgba(0,0,0,0)',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,0)',
            borderRadius: '16px',
            border: '0px solid #fff',
          },
          '&::-webkit-scrollbar-button': {
            display: 'none',
          },
          '&:hover::-webkit-scrollbar-thumb': {
            backgroundColor: '#a0a0a5',
            border: '4px solid #fff',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#a0a0a5',
            border: '4px solid #f4f4f4',
          },
        }
      },
    },
    ThemingPin: {
      baseStyle: (options: StyleOptions) => {
        return {
          position: 'absolute',
          background: 'linear-gradient(0deg, #e95704, #f6bd4d);',
          fontSize: 'x-small',
          borderRadius: '9px',
          border: '2px solid #222',
          minHeight: 2,
          minWidth: 3,
          padding: '2px 5px 1px',
          transition: 'background-color .1s',
          textAlign: 'center',
          lineHeight: 3,
          letterSpacing: '.4px',
          display: 'inline-block'
        }
      }
    },
  },
})

export default theme
