import { Flex, FlexProps, IconButton, chakra, IconButtonProps } from '@chakra-ui/react'
import { Icon24CopyOutline } from '@vkontakte/icons'
import React from 'react'
import { useCopyClickboard } from 'src/proccess'

interface CopyClickboardProps extends FlexProps {
  value?: string | number
  onCopy?: () => void
  icon?: React.ReactNode
  ariaLabel: IconButtonProps['aria-label']
}

export const CopyClickboard = ({
  icon = <Icon24CopyOutline />,
  value,
  onCopy,
  ariaLabel,
  children,
  ...props
}: CopyClickboardProps) => {
  const toClickboard = useCopyClickboard()

  const memoToClickboard = React.useCallback(() => {
    toClickboard(value, onCopy)
  }, [onCopy, toClickboard, value])
  return (
    <Flex
      fontSize="inherit"
      color="white.brand-400"
      fontWeight={400}
      letterSpacing=".6px"
      width="100%"
      alignItems="center"
      {...props}
    >
      <chakra.span userSelect={'none'}>{children}</chakra.span>
      <IconButton
        ml={2}
        size="sm"
        color="inherit"
        variant="icon"
        aria-label={ariaLabel}
        onClick={memoToClickboard}
      >
        {icon}
      </IconButton>
    </Flex>
  )
}
