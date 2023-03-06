import React from 'react'
import { $Array } from 'shulga-app-core'
import { DropdownItem } from '../types'

export const useDropdownConfig = (dropdowns: DropdownItem[] = []) => {
  const group = React.useMemo(() => $Array(dropdowns).groupBy('group'), [dropdowns])

  const isRender = React.useMemo(() => group.entries.length !== 0, [group.entries.length])

  return {
    isRender,
    group,
  }
}
