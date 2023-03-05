import { BoxProps } from '@chakra-ui/react'
import React from 'react'
import { ThemingScroll } from './ui'

const ScrollLayout = (props: React.PropsWithChildren<BoxProps>) => {
  return <ThemingScroll {...props} />
}

export { ScrollLayout }
