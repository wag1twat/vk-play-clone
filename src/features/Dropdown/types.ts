interface DropdownItem {
  id: number
  label: string
  group: string
  leftIcon?: React.ReactNode
  action?: () => void
  childrens?: DropdownItem[]
}

export type { DropdownItem }
