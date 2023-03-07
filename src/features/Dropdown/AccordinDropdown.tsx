import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Icon,
  Divider,
  Flex,
  FlexProps,
  Button,
} from '@chakra-ui/react'
import { Icon24ChevronDown, Icon24ChevronUp } from '@vkontakte/icons'
import React from 'react'
import { deepEqual } from 'shulga-app-core'
import { useDropdownConfig } from './model'
import { DropdownItem } from './types'
import { AccordionButtonLeftIcon, AccordionButtonRightIcon, AccordionButtonText } from './ui'

interface AccordinDropdownProps extends Omit<FlexProps, 'children'> {
  dropdowns?: DropdownItem[]
  preventBorderDeep?: number
  onItemClick?: (item: DropdownItem) => void
  getItemLabel: (item: DropdownItem) => string
  __deep?: number
}

export const AccordinDropdown = React.memo(
  ({
    dropdowns = [],
    onItemClick,
    getItemLabel,
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
              <Accordion variant="dropdown" allowMultiple>
                {items.map((item) => {
                  return (
                    <AccordionItem key={item.id} border="none">
                      {({ isExpanded }) => {
                        if (!item.childrens || item.childrens.length === 0) {
                          return (
                            <Button
                              variant="accordion"
                              data-expander={false}
                              onClick={handleItemClick(item)}
                              size="xs"
                            >
                              <AccordionButtonLeftIcon>{item.leftIcon}</AccordionButtonLeftIcon>
                              <AccordionButtonText>{getItemLabel(item)}</AccordionButtonText>
                            </Button>
                          )
                        }
                        return (
                          <>
                            <AccordionButton data-expander={true} onClick={handleItemClick(item)}>
                              <AccordionButtonLeftIcon>{item.leftIcon}</AccordionButtonLeftIcon>
                              <AccordionButtonText>{getItemLabel(item)}</AccordionButtonText>
                              <AccordionButtonRightIcon>
                                <Icon as={isExpanded ? Icon24ChevronUp : Icon24ChevronDown} />
                              </AccordionButtonRightIcon>
                            </AccordionButton>
                            <AccordionPanel p={0}>
                              <AccordinDropdown
                                key={item.id}
                                onItemClick={onItemClick}
                                getItemLabel={getItemLabel}
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
                  hidden={!(index !== group.entries.length - 1) || __deep === preventBorderDeep}
                  py={2}
                  pr={2}
                  pl={8}
                >
                  <Divider variant="accordion" />
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
