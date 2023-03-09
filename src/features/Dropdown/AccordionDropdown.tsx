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
import { $Array, deepEqual } from 'shulga-app-core'
import { DropdownItem } from './types'
import { AccordionButtonLeftIcon, AccordionButtonRightIcon, AccordionButtonText } from './ui'

interface AccordionDropdownProps extends Omit<FlexProps, 'children'> {
  dropdowns?: DropdownItem[]
  preventBorderDeep?: number
  onItemClick?: (item: DropdownItem) => void
  getItemLabel: (item: DropdownItem) => string
  __deep?: number
}

export const AccordionDropdown = React.memo(
  ({
    dropdowns = [],
    onItemClick,
    getItemLabel,
    preventBorderDeep = 1,
    __deep = 1,
    ...props
  }: AccordionDropdownProps) => {
    const groups = React.useMemo(() => $Array(dropdowns).groupBy('group'), [dropdowns])

    const handleItemClick = React.useCallback(
      (item: DropdownItem) => () => {
        if (onItemClick) {
          onItemClick(item)
        }
      },
      [onItemClick]
    )

    return (
      <Flex width="full" flexDirection={'column'} {...props}>
        {groups.entries.map(([key, items], index) => {
          return (
            <React.Fragment key={key}>
              <Accordion variant="dropdown" allowMultiple>
                {items.map((item) => {
                  return (
                    <AccordionItem key={item.id} border="none">
                      {({ isExpanded }) => {
                        if (!item.items || item.items.length === 0) {
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
                              <AccordionDropdown
                                key={item.id}
                                onItemClick={onItemClick}
                                getItemLabel={getItemLabel}
                                dropdowns={item.items}
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
                  hidden={!(index !== groups.entries.length - 1) || __deep === preventBorderDeep}
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
