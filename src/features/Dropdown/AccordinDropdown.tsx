import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Icon,
  chakra,
  Divider,
} from '@chakra-ui/react'
import { Icon24ChevronDown, Icon24ChevronUp } from '@vkontakte/icons'
import React from 'react'
import { deepEqual } from 'shulga-app-core'
import { useDropdownConfig } from './model'
import { DropdownItem } from './types'
import { AccordinItemButton } from './ui'

interface AccordinDropdownProps {
  dropdowns?: DropdownItem[]
  preventBorderDeep?: number
  __deep?: number
}

const iconMargin = 2
const iconSize = 6

export const AccordinDropdown = React.memo(
  ({ dropdowns = [], preventBorderDeep = 1, __deep = 1 }: AccordinDropdownProps) => {
    const { isRender, group } = useDropdownConfig(dropdowns)

    if (!isRender) {
      return null
    }

    return (
      <React.Fragment>
        {group.entries.map(([key, items], index) => {
          return (
            <React.Fragment key={key}>
              <Accordion defaultIndex={[0]} allowMultiple color="white.brand-500">
                {items.map((item) => {
                  return (
                    <AccordionItem key={item.id} border="none">
                      {({ isExpanded }) => {
                        if (!item.childrens || item.childrens.length === 0) {
                          return (
                            <AccordinItemButton
                              py={1}
                              pr={2}
                              pl={item.leftIcon ? 0 : iconSize + iconMargin * 2}
                              onClick={item.action}
                            >
                              {item.label}
                            </AccordinItemButton>
                          )
                        }
                        return (
                          <>
                            <AccordionButton
                              outline="none"
                              justifyContent="space-between"
                              cursor={'pointer'}
                              _focus={{
                                boxShadow: 'none',
                              }}
                              py={2}
                              pr={2}
                              pl={item.leftIcon ? 0 : iconSize + iconMargin * 2}
                            >
                              {item.leftIcon && (
                                <chakra.span width={iconSize} height={iconSize} mx={iconMargin}>
                                  {item.leftIcon}
                                </chakra.span>
                              )}
                              <chakra.span
                                textAlign="left"
                                fontSize={'lg'}
                                fontWeight="400"
                                flexGrow={1}
                                lineHeight={iconSize}
                              >
                                {item.label}
                              </chakra.span>
                              <Icon as={isExpanded ? Icon24ChevronUp : Icon24ChevronDown} />
                            </AccordionButton>
                            <AccordionPanel p={0} fontSize="md" color="inherit">
                              <AccordinDropdown
                                key={item.id}
                                dropdowns={item.childrens}
                                preventBorderDeep={preventBorderDeep}
                                __deep={__deep + 1}
                              />
                            </AccordionPanel>
                          </>
                        )
                      }}
                    </AccordionItem>
                  )
                })}
                <Box
                  py={2}
                  pr={2}
                  pl={iconSize + iconMargin * 2}
                  hidden={!(index !== group.entries.length - 1) || __deep === preventBorderDeep}
                >
                  <Divider />
                </Box>
              </Accordion>
            </React.Fragment>
          )
        })}
      </React.Fragment>
    )
  },
  (prev, next) => !deepEqual(prev, next)
)
