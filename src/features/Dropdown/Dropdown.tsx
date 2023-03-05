import { Divider, List, ListItem, ListProps, useTheme, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { $Array } from 'shulga-app-core'
import { Icon24ChevronCompactRight } from '@vkontakte/icons'
import { DropdownItem } from './types'

interface DropdownProps extends ListProps {
  dropdowns?: DropdownItem[]
}

const getIsRenderChildrens = (dropdown: DropdownItem) =>
  Array.isArray(dropdown.childrens) && dropdown.childrens.length > 0

export const Dropdown = ({ dropdowns, ...props }: DropdownProps) => {
  const theme = useTheme()

  const group = React.useMemo(() => $Array(dropdowns || []).groupBy('group'), [dropdowns])

  const isRender = React.useMemo(() => group.entries.length !== 0, [group.entries.length])

  if (!isRender) {
    return null
  }
  return (
    <List
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
      width="max-content"
      onClick={(e) => e.stopPropagation()}
      {...props}
    >
      {group.entries.map(([key, items], index) => {
        return (
          <React.Fragment key={key}>
            {items.map((item) => {
              const isRenderChildrens = getIsRenderChildrens(item)
              return (
                <ListItem
                  key={item.id}
                  onClick={item.action}
                  opacity=".8"
                  py={1}
                  px={4}
                  position="relative"
                  _hover={{
                    opacity: 1,
                    background: 'blackAlpha.400',
                    '& > .dropdown': {
                      visibility: 'visible',
                    },
                  }}
                >
                  <Text lineHeight={6}>
                    {item.label}
                    {isRenderChildrens && (
                      <Icon as={Icon24ChevronCompactRight} float="right" ml={2} />
                    )}
                  </Text>
                  {isRenderChildrens && (
                    <Dropdown dropdowns={item.childrens} top={-2} left="100%" />
                  )}
                </ListItem>
              )
            })}
            {
              <ListItem px={4} py={2} hidden={!(index !== group.entries.length - 1)}>
                <Divider />
              </ListItem>
            }
          </React.Fragment>
        )
      })}
    </List>
  )
}
