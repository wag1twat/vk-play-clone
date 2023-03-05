import { chakra, forwardRef, HTMLChakraProps, ThemingProps, useStyleConfig } from '@chakra-ui/react'
import React from 'react'

const ThemingHeaderWrapper = forwardRef<HTMLChakraProps<'div'> & ThemingProps, 'div'>(
  (props, ref) => {
    const styles = useStyleConfig('ThemingHeaderWrapper')
    return React.createElement(chakra.div, { __css: styles, ...props, ref })
  }
)

const ThemingHeader = forwardRef<HTMLChakraProps<'div'> & ThemingProps, 'div'>((props, ref) => {
  const styles = useStyleConfig('ThemingHeader')
  return React.createElement(chakra.div, { __css: styles, ...props, ref })
})

export { ThemingHeaderWrapper, ThemingHeader }
