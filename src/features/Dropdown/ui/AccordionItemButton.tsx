import { Button, ButtonProps, forwardRef, chakra } from '@chakra-ui/react'
import React from 'react'

export const AccordionItemButton = forwardRef(
  ({ children, ...props }: React.PropsWithChildren<ButtonProps>, ref) => {
    return (
      <Button
        variant="link"
        width="full"
        fontWeight="400"
        textAlign={'left'}
        outline="none"
        color="white.brand"
        _hover={{
          textDecoration: 'none',
          color: 'white.brand',
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
