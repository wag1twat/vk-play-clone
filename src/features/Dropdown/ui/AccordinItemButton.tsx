import { Button, ButtonProps, forwardRef, chakra } from '@chakra-ui/react'
import React from 'react'

export const AccordinItemButton = forwardRef(
  ({ children, ...props }: React.PropsWithChildren<ButtonProps>, ref) => {
    return (
      <Button
        variant="link"
        width="full"
        color="inherit"
        opacity={'.8'}
        fontWeight="400"
        textAlign={'left'}
        outline="none"
        _hover={{
          textDecoration: 'none',
          opacity: 1,
        }}
        _focus={{
          boxShadow: 'none',
        }}
        _loading={{
          right: 0,
          justifyContent: 'flex-start',
        }}
        ref={ref}
        {...props}
      >
        <chakra.span flexGrow={1}>{children}</chakra.span>
      </Button>
    )
  }
)
