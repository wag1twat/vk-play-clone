import { List, ListProps } from '@chakra-ui/react'
import React from 'react'

export const HoverCard = (props: ListProps) => {
  return (
    <List
      listStyleType={'none'}
      background={'rgba(50, 50, 54)'}
      spacing={0}
      fontSize={'sm'}
      fontWeight="normal"
      color="white.brand-500"
      {...props}
    />
  )
}
