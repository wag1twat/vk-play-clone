import { StyleConfig } from '@chakra-ui/react'

const ButtonTheme: StyleConfig = {
  variants: {
    icon: {
      color: 'white.brand-500',
      opacity: '.8',
      transition: 'opacity .1s',
      _hover: {
        opacity: 1,
        transition: 'opacity .1s',
        backgroundColor: 'gray.light-brand-50',
      },
    },
  },
}

export { ButtonTheme }
