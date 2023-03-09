import { MenuButtonProps, MenuProps } from '@chakra-ui/react'
import { Dropdown } from 'src/proccess/api-hooks'

interface DropdownItem extends Dropdown {
  leftIcon?: React.ReactNode
  items?: DropdownItem[] | undefined
}

type Binding = 'click' | 'hover'

interface DropdownState {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

interface ItemClickProps extends DropdownState {
  item: ExpirementalDropdownItem
}

export interface ExpirementalDropdownItem extends Dropdown {
  leftIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined
  afterComponent?: React.ReactNode
  beforeComponent?: React.ReactNode
  items?: ExpirementalDropdownItem[] | undefined
  visible?: boolean
}

export interface ExpirementalDropdownProps
  extends Omit<MenuProps, 'children' | 'onMouseEnter' | 'onMouseLeave'> {
  items: Array<ExpirementalDropdownItem> | undefined
  binding?: Binding
  label: (state: DropdownState) => React.ReactNode
  onItemClick?: (props: ItemClickProps) => void
  itemLabel?: (item: ExpirementalDropdownItem) => string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  menuButtonProps?: Omit<MenuButtonProps, 'onMouseEnter' | 'onMouseLeave'>
}

export type { DropdownItem }
