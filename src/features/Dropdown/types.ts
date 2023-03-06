import { Dropdown } from 'src/proccess/api-hooks'

interface DropdownItem extends Dropdown {
  leftIcon?: React.ReactNode
  isLoading?: boolean
  childrens?: DropdownItem[]
}

export type { DropdownItem }
