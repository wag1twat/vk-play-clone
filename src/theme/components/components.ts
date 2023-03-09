import React from 'react'
import {
  StyleConfig,
  chakra,
  forwardRef,
  HTMLChakraProps,
  ThemingProps,
  useStyleConfig,
} from '@chakra-ui/react'

enum Components {
  '_ScrollLayout' = '_ScrollLayout',
  '_PageBackground' = '_PageBackground',
  '_Pin' = '_Pin',
  '_HeaderWrapper' = '_HeaderWrapper',
  '_ContentLayout' = '_ContentLayout',
}

const components: Record<string, StyleConfig> = {
  Divider: {
    variants: {
      accordion: {
        color: 'white.brand-700',
        borderStyle: 'solid',
      },
    },
  },
  Accordion: {
    variants: {
      dropdown: {
        button: {
          py: 2,
          px: 0,
          fontSize: 'lg',
          color: 'white.brand-900',
          width: 'full',
          fontWeight: '400',
          textAlign: 'left',
          outline: 'none',
          lineHeight: 6,
          '&[data-expander=false]': {
            py: 1,
            color: 'white.brand-700',
          },
          '& .accordion-button-left-icon': {
            width: 6,
            height: 6,
            color: 'white.brand-700',
            mr: 2,
          },
          '& .accordion-button-right-icon': {
            color: 'white.brand-700',
          },
          '& .accordion-button-text': {
            flexGrow: 1,
          },
          ':hover': {
            '& .accordion-button-left-icon': {
              color: 'white.brand',
            },
            '& .accordion-button-right-icon': {
              color: 'white.brand',
            },
            '& .accordion-button-text': {
              color: 'white.brand',
            },
          },
          ':focus': {
            boxShadow: 'none',
          },
        },
      },
    },
  },
  Menu: {
    variants: {
      dropdown: {
        list: {
          color: 'white.brand-700',
          bg: 'rgba(50, 50, 54)',
          fontSize: 'sm',
          fontWeight: 400,
          borderStyle: 'solid',
          borderColor: 'white.brand-100',
          borderWidth: '0.5px',
          zIndex(theme) {
            return theme.zIndices.popover
          },
        },
        button: {
          color: 'inherit',
          bg: 'transparent',
          opacity: '.8',
          transition: 'opacity .1s',
          lineHeight: 6,
          _hover: {
            color: 'white.brand-900',
            opacity: 1,
            transition: 'opacity .1s',
            bg: 'blackAlpha.400',
          },
          '.menu-button-left-icon': {
            float: 'left',
            mr: 3,
            display: 'inline-block',
            verticalAlign: 'middle',
            width: 6,
            height: 6,
          },
          '.menu-button-right-icon': {
            float: 'right',
            ml: 3,
            display: 'inline-block',
            verticalAlign: 'middle',
            width: 6,
            height: 6,
          },
          span: {
            pointerEvents: 'unset',
          },
        },
        item: {
          bg: 'transparent',
          color: 'inherit',
          opacity: '.8',
          transition: 'opacity .1s',
          lineHeight: 6,
          _hover: {
            color: 'white.brand-900',
            opacity: 1,
            transition: 'opacity .1s',
            bg: 'blackAlpha.400',
          },
        },
      },
    },
  },
  List: {
    variants: {
      dropdown: {
        container: {
          listStyleType: 'none',
          background: 'rgba(50, 50, 54);',
          fontSize: 'sm',
          fontWeight: 'normal',
          color: 'white.brand-700',
          position: 'absolute',
          borderRadius: '4px',
          py: 2,
          left: -4,
          top: `calc(100% - 2px)`,
          visibility: 'hidden',
          width: 'max-content',
          zIndex(theme) {
            return theme.zIndices.dropdown
          },
        },
        item: {
          py: 1,
          px: 4,
          lineHeight: 6,
          cursor: 'pointer',
          position: 'relative',
          _hover: {
            background: 'blackAlpha.400',
            '& > .dropdown': {
              visibility: 'visible',
            },
          },
          '&[data-divider=true]:hover': {
            background: 'transparent',
            cursor: 'default',
          },
        },
        icon: {
          float: 'right',
          ml: 2,
          visibility: 'hidden',
          '&[data-visibility=true]': {
            visibility: 'visible',
          },
        },
      },
    },
  },
  Link: {
    variants: {
      underlining: {
        display: 'inline-block',
        color: 'white.brand-700',
        fontSize: 'lg',
        alignItems: 'center',
        fontWeight: 600,
        lineHeight: 5,
        letterSpacing: 0.5,
        position: 'relative',
        textDecoration: 'none',
        py: 2,
        '&:after': {
          content: `''`,
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 1,
          backgroundColor: 'white.brand',
          borderRadius: 2,
          opacity: 0,
          transition: 'opacity .1s',
          textDecoration: 'none',
        },

        '&:hover': {
          color: 'white.brand',
          textDecoration: 'none',
          _after: {
            opacity: 1,
          },
        },
        '&[data-hover=true]': {
          color: 'white.brand',
          textDecoration: 'none',
          _after: {
            opacity: 1,
          },
        },
        '&[data-hover=false]': {
          textDecoration: 'none',
        },
        '&[data-active=false]:hover': {
          color: 'white.brand',
          textDecoration: 'none',
          _after: {
            opacity: 1,
          },
        },
        '&[data-active=true]': {
          color: 'white.brand',
          textDecoration: 'none',
          _after: {
            opacity: 1,
            backgroundImage: 'linear-gradient(to right, #f87d28, #face5a)',
          },
        },
      },
    },
  },
  Button: {
    variants: {
      icon: {
        color: 'white.brand-700',
        transition: 'color .1s',
        _hover: {
          transition: 'color .1s',
          color: 'white.brand-900',
          backgroundColor: 'white.brand-50',
        },
      },
      link: {
        color: 'white.brand-700',
        fontWeight: '400',
        ':hover': {
          textDecoration: 'none',
          color: 'white.brand-900',
        },
      },
      accordion({ theme }) {
        return theme.components.Accordion.variants.dropdown.button
      },
    },
  },
  Input: {
    variants: {
      default: {
        field: {
          backgroundColor: 'white.brand-50',
          border: '1px solid',
          borderColor: 'white.brand-50',
          color: 'white.brand-900',
          _placeholder: {
            color: 'white.brand-500',
          },
          ':hover': {
            borderColor: 'white.brand-100',
          },
          ':focus': {
            borderColor: 'white.brand-100',
            boxShadow: 'none',
          },
        },
        addon: {
          color: 'white.brand-500',
        },
        element: {
          color: 'white.brand-500',
        },
      },
    },
  },
  [Components._ScrollLayout]: {
    baseStyle(options) {
      return {
        overflow: 'overlay',
        '&:scrollable': {
          color: 'red',
        },
        '&::-webkit-scrollbar': {
          backgroundColor: ' rgba(0,0,0,0)',
          width: 2,
          height: 2,
          zIndex: '999999',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'rgba(0,0,0,0)',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,0)',
          borderRadius: 4,
          border: '0px solid #fff',
        },
        '&::-webkit-scrollbar-button': {
          display: 'none',
        },
        '&:hover::-webkit-scrollbar-thumb': {
          backgroundColor: '#a0a0a5',
          border: '1px solid #fff',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#a0a0a5',
          border: '1px solid #f4f4f4',
        },
      }
    },
  },
  [Components._PageBackground]: {
    baseStyle() {
      return {
        position: 'relative',
        minHeight: 'calc(100vh - var(--chakra-header-height))',
        '&:before': {
          content: `""`,
          position: 'absolute',
          zIndex: -1,
          top: 0,
          left: 0,
          right: 0,
          height: '1080px',
          background: 'no-repeat 50% 0',
          maxHeight: '100%',
          backgroundSize: '1920px auto',
        },
        '&:after': {
          content: `""`,
          position: 'absolute',
          zIndex: -2,
          top: 0,
          left: 0,
          right: 0,
          background: '#000',
          height: '100%',
        },
      }
    },
  },
  [Components._Pin]: {
    baseStyle: (options) => {
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
        lineHeight: 'normal',
        letterSpacing: '.4px',
        display: 'inline-block',
      }
    },
  },
  [Components._HeaderWrapper]: {
    baseStyle: (options) => {
      return {
        width: '100%',
        color: '#fff',
        zIndex: options.theme.zIndices.sticky,
        position: 'sticky',
        height: 'var(--chakra-header-height)',
        ':before': {
          content: `''`,
          background: '#000',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        },
        ':after': {
          content: `''`,
          backgroundColor: 'white.brand-100',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        },
      }
    },
  },
  [Components._ContentLayout]: {
    baseStyle: (options) => {
      return {
        width: '100%',
        maxWidth: '7xl',
        margin: 'auto',
        px: [2, 2, 2, 4, 8],
      }
    },
  },
}

const ScrollLayout = forwardRef<HTMLChakraProps<'div'> & ThemingProps, 'div'>((props, ref) => {
  const styles = useStyleConfig(Components._ScrollLayout)
  return React.createElement(chakra.div, { __css: styles, ...props, ref })
})

const PageBackground = forwardRef<HTMLChakraProps<'div'> & ThemingProps, 'div'>((props, ref) => {
  const styles = useStyleConfig(Components._PageBackground)
  return React.createElement(chakra.div, { __css: styles, ...props, ref })
})

const HeaderWrapper = forwardRef<HTMLChakraProps<'div'> & ThemingProps, 'div'>((props, ref) => {
  const styles = useStyleConfig(Components._HeaderWrapper)
  return React.createElement(chakra.div, { __css: styles, ...props, ref })
})

const Pin = forwardRef<HTMLChakraProps<'span'> & ThemingProps, 'span'>((props, ref) => {
  const styles = useStyleConfig(Components._Pin)
  return React.createElement(chakra.span, { __css: styles, ...props, ref })
})

const ContentLayout = forwardRef<HTMLChakraProps<'div'> & ThemingProps, 'div'>((props, ref) => {
  const styles = useStyleConfig(Components._ContentLayout)
  return React.createElement(chakra.div, { __css: styles, ...props, ref })
})

export { ScrollLayout, PageBackground, HeaderWrapper, Pin, ContentLayout, components }
