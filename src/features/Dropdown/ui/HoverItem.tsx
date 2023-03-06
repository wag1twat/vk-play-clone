import { ListItem, ListItemProps, Icon } from '@chakra-ui/react'
import { Icon24ChevronCompactRight } from '@vkontakte/icons'
import React from 'react'

interface HoverItemProps extends ListItemProps {
  isArrow?: boolean
}

export const HoverItem = ({ isArrow, children, ...props }: HoverItemProps) => {
  return (
    <ListItem opacity=".8" py={1} px={4} lineHeight={6} cursor="pointer" {...props}>
      {children}
      {isArrow && <Icon as={Icon24ChevronCompactRight} float="right" ml={2} />}
    </ListItem>
  )
}
