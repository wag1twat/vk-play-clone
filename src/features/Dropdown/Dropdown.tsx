import { List, ListItem, ListProps, useTheme } from '@chakra-ui/react'
import React from 'react'
import { DropdownItem } from './types'

interface DropdownProps extends ListProps {
  dropdowns?: DropdownItem[]
}

export const Dropdown = ({ dropdowns = [], ...props }: DropdownProps) => {
  const theme = useTheme()
  return (
    <List
      {...props}
      listStyleType={'none'}
      position="absolute"
      zIndex={theme.zIndices.dropdown}
      background={'rgba(50, 50, 54)'}
      borderRadius="4px"
      spacing={0}
      py={2}
      left={-4}
      top={`calc(100% - 2px)`}
      visibility="hidden"
      transtiton="height .1s"
      className="dropdown"
      fontSize={'sm'}
      fontWeight="normal"
      color="white.brand-500"
      onClick={(e) => e.stopPropagation()}
    >
      {dropdowns.map((dropdown) => {
        return (
          <ListItem
            key={dropdown.id}
            onClick={dropdown.action}
            opacity=".8"
            _hover={{
              opacity: 1,
              background: 'blackAlpha.400',
            }}
            py={1}
            px={4}
          >
            {dropdown.label}
          </ListItem>
        )
      })}
    </List>
  )
}
