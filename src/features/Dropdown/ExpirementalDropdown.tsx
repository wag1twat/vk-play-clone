import {
  Menu,
  MenuButton,
  MenuButtonProps,
  MenuItem,
  MenuList,
  useDisclosure,
  chakra,
  Box,
  Divider,
} from '@chakra-ui/react'
import { Icon24ChevronCompactRight } from '@vkontakte/icons'
import React from 'react'
import { $Array, Guards } from 'shulga-app-core'
import { ExpirementalDropdownItem, ExpirementalDropdownProps } from './types'

const defaultMenuButtonProps: MenuButtonProps = {
  px: 3,
  py: 1.5,
  width: 'full',
  textAlign: 'left',
}

export const ExpirementalDropdown = ({
  items = [],
  binding = 'hover',
  label,
  leftIcon,
  rightIcon,
  menuButtonProps = {},
  onItemClick,
  itemLabel,
  ...menuProps
}: ExpirementalDropdownProps) => {
  const groups = React.useMemo(() => $Array(items).groupBy('group'), [items])

  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false })

  const handleItemClick = React.useCallback(
    (item: ExpirementalDropdownItem) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (Guards.isFunc(onItemClick)) {
        onItemClick({ item, isOpen, onOpen, onClose })
      }
    },
    [isOpen, onClose, onItemClick, onOpen]
  )
  const handleItemLabel = React.useCallback(
    (item: ExpirementalDropdownItem) => {
      if (Guards.isFunc(itemLabel)) {
        return itemLabel(item)
      }
      return item.placeholder
    },
    [itemLabel]
  )

  const properties = React.useMemo(() => {
    return {
      click: {
        Menu: { isOpen, onOpen, onClose },
        MenuButton: {},
        MenuList: {},
      },
      hover: {
        Menu: {
          isOpen,
        },
        MenuButton: {
          onMouseEnter: onOpen,
          onMouseLeave: onClose,
        },
        MenuList: {
          onMouseEnter: onOpen,
          onMouseLeave: onClose,
        },
      },
    }[binding]
  }, [binding, isOpen, onClose, onOpen])
  return (
    <Menu
      placement="auto"
      computePositionOnMount
      preventOverflow={true}
      flip={true}
      offset={[2, -4]}
      closeOnSelect={false}
      variant="dropdown"
      {...properties.Menu}
      {...menuProps}
    >
      <MenuButton {...properties.MenuButton} {...{ ...defaultMenuButtonProps, ...menuButtonProps }}>
        {leftIcon && <chakra.span className="menu-button-left-icon">{leftIcon}</chakra.span>}
        {label({ isOpen, onOpen, onClose })}
        {rightIcon && <chakra.span className="menu-button-right-icon">{rightIcon}</chakra.span>}
      </MenuButton>
      {isOpen && (
        <MenuList motionProps={{ animate: false }} {...properties.MenuList}>
          {groups.entries.map(([key, values], index) => {
            return (
              <React.Fragment key={key}>
                {values.map((item) => {
                  if (item.visible === false) {
                    return null
                  }
                  return (
                    <React.Fragment key={item.id}>
                      {item.beforeComponent}
                      {!item.items && (
                        <MenuItem icon={item.leftIcon} onClick={handleItemClick(item)}>
                          {handleItemLabel(item)}
                        </MenuItem>
                      )}
                      {item.items && (
                        <ExpirementalDropdown
                          label={() => handleItemLabel(item)}
                          rightIcon={<Icon24ChevronCompactRight />}
                          onItemClick={onItemClick}
                          itemLabel={itemLabel}
                          items={item.items}
                          placement="right"
                        />
                      )}
                      {item.afterComponent}
                    </React.Fragment>
                  )
                })}
                {index !== groups.entries.length - 1 && (
                  <Box py={1} px={3}>
                    <Divider />
                  </Box>
                )}
              </React.Fragment>
            )
          })}
        </MenuList>
      )}
    </Menu>
  )
}
