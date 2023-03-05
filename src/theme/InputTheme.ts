import { StyleConfig } from '@chakra-ui/react'

const InputTheme: StyleConfig = {
  variants: {
    default: {
      field: {
        backgroundColor: 'gray.light-brand-50',
        border: '1px solid',
        borderColor: 'gray.light-brand-50',
        color: 'white.brand-500',
        _placeholder: {
          color: 'white.brand-500',
          opacity: '.6',
        },
        ':hover': {
          borderColor: 'gray.light-brand-100',
        },
        ':focus': {
          borderColor: 'gray.light-brand-100',
          boxShadow: 'none',
        },
      },
      addon: {
        color: 'white.brand-500',
        opacity: '.6',
      },
      element: {
        color: 'white.brand-500',
        opacity: '.6',
      },
    },
  },
}

export { InputTheme }
