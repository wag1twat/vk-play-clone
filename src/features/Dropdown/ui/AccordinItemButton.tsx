import { Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'

export const AccordinItemButton = (props: React.PropsWithChildren<ButtonProps>) => {
  return (
    <Button
      variant="link"
      color="inherit"
      opacity={'.8'}
      fontWeight="400"
      _hover={{
        textDecoration: 'none',
        opacity: 1,
      }}
      {...props}
    />
  )
}
