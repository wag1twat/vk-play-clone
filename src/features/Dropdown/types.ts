interface DropdownItem {
    id: number
    label: string
    group: string
    action(): void
    childrens?: DropdownItem[]
  }
  
  export type { DropdownItem }