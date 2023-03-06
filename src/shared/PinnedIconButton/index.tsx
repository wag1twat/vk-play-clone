import React from 'react'
import { IconButton, IconButtonProps } from '@chakra-ui/react'
import { Pin } from 'src/theme/components'

interface PinnedIconButtonProps extends IconButtonProps {
  pin: React.ReactNode
}

const PinnedIconButton = ({ pin, children, ...props }: PinnedIconButtonProps) => {
  return (
    <IconButton {...props} position="relative">
      <>
        {children}
        <Pin hidden={!pin} position={'absolute'} top={0} left={0.5}>
          {pin}
        </Pin>
      </>
    </IconButton>
  )
}

export { PinnedIconButton }
