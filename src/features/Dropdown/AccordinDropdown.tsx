import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Icon,
  chakra,
  Divider,
  Flex,
  FlexProps,
} from '@chakra-ui/react'
import { Icon24ChevronDown, Icon24ChevronUp } from '@vkontakte/icons'
import React from 'react'
import { deepEqual } from 'shulga-app-core'
import { useDropdownConfig } from './model'
import { DropdownItem } from './types'
import { AccordionItemButton } from './ui'

interface AccordinDropdownProps extends Omit<FlexProps, 'children'> {
  dropdowns?: DropdownItem[]
  preventBorderDeep?: number
  onItemClick?: (item: DropdownItem) => void
  __deep?: number
}

const iconSize = 6

export const AccordinDropdown = React.memo(
  ({
    dropdowns = [],
    onItemClick,
    preventBorderDeep = 1,
    __deep = 1,
    ...props
  }: AccordinDropdownProps) => {
    const { isRender, group } = useDropdownConfig(dropdowns)

    const handleItemClick = React.useCallback(
      (item: DropdownItem) => () => {
        if (onItemClick) {
          onItemClick(item)
        }
      },
      [onItemClick]
    )

    if (!isRender) {
      return null
    }

    return (
      <Flex width="full" flexDirection={'column'} {...props}>
        {group.entries.map(([key, items], index) => {
          return (
            <React.Fragment key={key}>
              <Accordion allowMultiple>
                {items.map((item) => {
                  return (
                    <AccordionItem key={item.id} border="none">
                      {({ isExpanded }) => {
                        if (!item.childrens || item.childrens.length === 0) {
                          return (
                            <AccordionItemButton
                              py={1}
                              isLoading={item.isLoading}
                              leftIcon={
                                <chakra.span width={iconSize} height={iconSize}>
                                  {item.leftIcon}
                                </chakra.span>
                              }
                              onClick={handleItemClick(item)}
                              color="white.brand-700"
                            >
                              {item.label}
                            </AccordionItemButton>
                          )
                        }
                        return (
                          <>
                            <AccordionButton
                              as={AccordionItemButton}
                              py={2}
                              px={0}
                              isLoading={item.isLoading}
                              fontSize={'lg'}
                              fontWeight="400"
                              leftIcon={
                                <chakra.span
                                  width={iconSize}
                                  height={iconSize}
                                  color="white.brand-700"
                                >
                                  {item.leftIcon}
                                </chakra.span>
                              }
                              rightIcon={
                                <Icon as={isExpanded ? Icon24ChevronUp : Icon24ChevronDown} />
                              }
                              onClick={handleItemClick(item)}
                              color="white.brand-900"
                            >
                              {item.label}
                            </AccordionButton>
                            <AccordionPanel p={0} fontSize="md">
                              <AccordinDropdown
                                key={item.id}
                                onItemClick={onItemClick}
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
                  pl={8}
                  hidden={!(index !== group.entries.length - 1) || __deep === preventBorderDeep}
                  color="white.brand-700"
                >
                  <Divider />
                </Box>
              </Accordion>
            </React.Fragment>
          )
        })}
      </Flex>
    )
  },
  (prev, next) => deepEqual(prev, next)
)
