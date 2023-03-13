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
  '_CarouselLayout' = '_CarouselLayout',
  '_CarouselSideLayout' = '_CarouselSideLayout',
  '_CarouselArrowIconLayout' = '_CarouselArrowIconLayout',
  '_CarouselItemLayout' = '_CarouselItemLayout',
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
  [Components._CarouselLayout]: {
    baseStyle: () => {
      return {
        '.slick-slider': {
          touchAction: 'pan-y',
        },
        '.slick-slider .slick-dots': {
          button: {
            position: 'relative',
            zIndex: 5,
            padding: 0,
            fontSize: 0,
            textIndent: '-9999px',
            overflow: 'hidden',
            height: '25px',
            background: 'none',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            appearance: 'none',
            tapHighlightColor: 'transparent',
            ':before': {
              content: `''`,
              position: 'absolute',
              top: '11px',
              left: 0,
              height: '2px',
              backgroundColor: '#7f8792',
              borderRadius: '2px',
              opacity: 0.4,
              willChange: 'opacity',
            },
            ':hover:before': {
              backgroundColor: '#d4d4d4',
            },
          },
        },
        '.slick-slider:hover .slick-dots li.slick-active': {
          button: {
            ':after': {
              animation: 'none',
            },
          },
        },
        '.slick-dots li.slick-active': {
          button: {
            ':before': {
              backgroundColor: '#d4d4d4',
            },
            ':after': {
              content: `''`,
              position: 'absolute',
              top: '10px',
              left: 0,
              height: '4px',
              backgroundColor: '#7f8792',
              opacity: 0.4,
              willChange: 'opacity',
              width: '0%',
              borderStyle: 'solid',
              borderWidth: '1px',
              borderColor: '#d4d4d4',
              animation: 'resizedotsbar 5s linear',
              '@keyframes resizedotsbar': {
                '0%': {
                  width: '0%',
                },
                '100%': {
                  width: '100%',
                },
              },
            },
          },
        },
        '.slick-slider .slick-track': { transition: 'left .3s ease-out;' },
        '.slick-slide': {
          transform: 'scale(.95) translateZ(0);',
          transition: 'transform .3s',
          overflow: 'hidden',
        },
        '.slick-slide + .slick-center': {
          transform: 'scale(1) translateZ(0);',
          transition: 'transform .3s',
        },
        '.side-left:hover ~ .slick-slider .slick-track': {
          left: [0, 0, 0, 0, 2, 2, 2],
        },
        '.side-right:hover ~ .slick-slider .slick-track': {
          left: [0, 0, 0, 0, -2, -2, -2],
        },
      }
    },
  },
  [Components._CarouselSideLayout]: {
    baseStyle: () => {
      return {
        cursor: 'pointer',
        display: 'block',
        position: 'absolute',
        zIndex: 20,
        opacity: '.3',
        color: 'white.brand-700',
        ':after': {
          content: `''`,
          position: 'absolute',
          width: '50%',
          height: 'calc(100% - 16px)',
          top: 2,
        },
        ':hover': {
          color: 'white.brand-900',
          opacity: 1,
        },
        ':hover:after': {
          background: 'none',
        },
      }
    },
  },
  [Components._CarouselArrowIconLayout]: {
    baseStyle: () => {
      return {
        position: 'absolute',
        width: '38px',
        height: '38px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'blackAlpha.900',
        borderRadius: 6,
      }
    },
  },
  [Components._CarouselItemLayout]: {
    baseStyle: () => {
      return {
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'white.brand-500',
        overflow: 'hidden',
        background: 'gray.700',
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

const CarouselLayout = forwardRef<HTMLChakraProps<'div'> & ThemingProps, 'div'>((props, ref) => {
  const styles = useStyleConfig(Components._CarouselLayout)

  return React.createElement(chakra.div, { __css: styles, ...props, ref })
})

const CarouselSideLayout = forwardRef<HTMLChakraProps<'div'> & ThemingProps, 'div'>(
  (props, ref) => {
    const styles = useStyleConfig(Components._CarouselSideLayout)

    return React.createElement(chakra.div, { __css: styles, ...props, ref })
  }
)

const CarouselArrowIconLayout = forwardRef<HTMLChakraProps<'div'> & ThemingProps, 'div'>(
  (props, ref) => {
    const styles = useStyleConfig(Components._CarouselArrowIconLayout)

    return React.createElement(chakra.div, { __css: styles, ...props, ref })
  }
)

const CarouselItemLayout = forwardRef<HTMLChakraProps<'div'> & ThemingProps, 'div'>(
  (props, ref) => {
    const styles = useStyleConfig(Components._CarouselItemLayout)

    return React.createElement(chakra.div, { __css: styles, ...props, ref })
  }
)

export {
  ScrollLayout,
  PageBackground,
  HeaderWrapper,
  Pin,
  ContentLayout,
  CarouselLayout,
  CarouselSideLayout,
  CarouselItemLayout,
  CarouselArrowIconLayout,
  components,
}
