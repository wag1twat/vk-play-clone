interface DropdownItem {
  id: number
  label: string
  group: string
  leftIcon?: React.ReactNode
  isLoading?: boolean
  childrens?: DropdownItem[]
}

export type { DropdownItem }
