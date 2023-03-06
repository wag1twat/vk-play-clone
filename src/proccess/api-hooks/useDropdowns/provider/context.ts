import React from 'react'
import { UseQueryResult } from 'react-query'
import { DropdownItem } from 'src/features'

interface Context {
  media: UseQueryResult<DropdownItem[]>
  games: UseQueryResult<DropdownItem[]>
  tournaments: UseQueryResult<DropdownItem[]>
}

export const context = React.createContext({} as Context)
