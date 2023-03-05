import { Text, TextProps } from '@chakra-ui/react'
import React from 'react'

export const TextDefault = (props: TextProps) => {
  return <Text color="white.brand-500" opacity={'.8'} transition="opacity .1s" {...props} />
}
