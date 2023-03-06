import { DropdownItem } from '../types'

const getIsRenderChildrens = (dropdown: DropdownItem) =>
  Array.isArray(dropdown.childrens) && dropdown.childrens.length > 0

export { getIsRenderChildrens }
