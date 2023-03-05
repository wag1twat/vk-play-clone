import { StyleConfig } from '@chakra-ui/react'

const LinkTheme: StyleConfig = {
  variants: {
    underlining: {
      '&': {
        color: 'white.brand-500',
        fontSize: 'lg',
        alignItems: 'center',
        fontWeight: 600,
        lineHeight: 5,
        opacity: '.8',
        transition: 'opacity .1s',
        letterSpacing: 0.5,
        position: 'relative',
        textDecoration: 'none',
        py: 2
      },
      '&:after': {
        content: `''`,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 1,
        backgroundColor: '#fff',
        borderRadius: 2,
        opacity: 0,
        transition: 'opacity .1s',
        textDecoration: 'none'
      },
      '&[data-active=false]:hover': {
        opacity: 1,
        textDecoration: 'none',
        _after: {
          opacity: 1,
        },
      },
      '&[data-active=true]': {
        opacity: 1,
        textDecoration: 'none',
        _after: {
          opacity: 1,
          backgroundImage: 'linear-gradient(to right, #f87d28, #face5a)'
        }
      },
      '&:hover .dropdown': {
        visibility: 'visible'
      }
    },
  },
}

export { LinkTheme }
