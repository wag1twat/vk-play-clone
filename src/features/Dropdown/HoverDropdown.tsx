import { Divider, ListProps, useTheme } from '@chakra-ui/react'
import React from 'react'
import { getIsRenderChildrens, useDropdownConfig } from './model'
import { DropdownItem } from './types'
import { HoverCard, HoverItem } from './ui'

interface DropdownProps extends ListProps {
  dropdowns?: DropdownItem[]
  getItemLabel: (item: DropdownItem) => string
}

export const HoverDropdown = ({ getItemLabel, dropdowns, ...props }: DropdownProps) => {
  const theme = useTheme()

  const { isRender, group } = useDropdownConfig(dropdowns)

  if (!isRender) {
    return null
  }
  return (
    <HoverCard
      position="absolute"
      zIndex={theme.zIndices.dropdown}
      borderRadius="4px"
      py={2}
      left={-4}
      top={`calc(100% - 2px)`}
      visibility="hidden"
      className="dropdown"
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
                <HoverItem
                  key={item.id}
                  position="relative"
                  _hover={{
                    background: 'blackAlpha.400',
                    '& > .dropdown': {
                      visibility: 'visible',
                    },
                  }}
                  isArrow={isRenderChildrens}
                >
                  {getItemLabel(item)}
                  {isRenderChildrens && (
                    <HoverDropdown
                      getItemLabel={getItemLabel}
                      dropdowns={item.childrens}
                      top={-2}
                      left="100%"
                    />
                  )}
                </HoverItem>
              )
            })}
            <HoverItem px={4} py={2} hidden={!(index !== group.entries.length - 1)}>
              <Divider />
            </HoverItem>
          </React.Fragment>
        )
      })}
    </HoverCard>
  )
}
