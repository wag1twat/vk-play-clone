import React from 'react'
import {
  chakra,
  forwardRef,
  HTMLChakraProps,
  IconButton,
  IconButtonProps,
  ThemingProps,
  useStyleConfig,
} from '@chakra-ui/react'

const Pin = forwardRef<HTMLChakraProps<'span'> & ThemingProps, 'span'>((props, ref) => {
  const styles = useStyleConfig('ThemingPin')
  return React.createElement(chakra.span, { __css: styles, ...props, ref })
})

interface PinnedIconButtonProps extends IconButtonProps {
  pin: React.ReactNode
}

const PinnedIconButton = ({ pin, children, ...props }: PinnedIconButtonProps) => {
  return (
    <IconButton {...props} position="relative">
      <>
        {children}
        <Pin position={'absolute'} top={0} left={0.5}>
          {pin}
        </Pin>
      </>
    </IconButton>
  )
}

export { PinnedIconButton }
