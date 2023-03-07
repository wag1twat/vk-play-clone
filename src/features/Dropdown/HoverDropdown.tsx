import { Divider, List, ListItem, ListProps, ListIcon } from '@chakra-ui/react'
import { Icon24ChevronCompactRight } from '@vkontakte/icons'
import React from 'react'
import { getIsRenderChildrens, useDropdownConfig } from './model'
import { DropdownItem } from './types'

interface DropdownProps extends ListProps {
  dropdowns?: DropdownItem[]
  getItemLabel: (item: DropdownItem) => string
}

export const HoverDropdown = ({ getItemLabel, dropdowns, ...props }: DropdownProps) => {
  const { isRender, group } = useDropdownConfig(dropdowns)

  if (!isRender) {
    return null
  }
  return (
    <List
      variant="dropdown"
      className="dropdown"
      onClick={(e) => e.stopPropagation()}
      spacing={0}
      {...props}
    >
      {group.entries.map(([key, items], index) => {
        return (
          <React.Fragment key={key}>
            {items.map((item) => {
              const isRenderChildrens = getIsRenderChildrens(item)
              return (
                <ListItem key={item.id}>
                  {getItemLabel(item)}
                  <ListIcon data-visibility={isRenderChildrens} as={Icon24ChevronCompactRight} />
                  {isRenderChildrens && (
                    <HoverDropdown
                      getItemLabel={getItemLabel}
                      dropdowns={item.childrens}
                      top={-2}
                      left="100%"
                    />
                  )}
                </ListItem>
              )
            })}
            <ListItem
              px={4}
              py={2}
              hidden={!(index !== group.entries.length - 1)}
              data-divider={true}
            >
              <Divider />
            </ListItem>
          </React.Fragment>
        )
      })}
    </List>
  )
}
