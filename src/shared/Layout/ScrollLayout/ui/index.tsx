import React from 'react'
import { chakra, forwardRef, HTMLChakraProps, ThemingProps, useStyleConfig } from '@chakra-ui/react'

const ThemingScroll = forwardRef<HTMLChakraProps<'div'> & ThemingProps, 'div'>((props, ref) => {
  const styles = useStyleConfig('ThemingScroll')
  return React.createElement(chakra.div, { __css: styles, ...props, ref })
})

export { ThemingScroll }
