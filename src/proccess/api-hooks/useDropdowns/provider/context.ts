import React from 'react'
import { UseQueryResult } from 'react-query'
import { Dropdown } from '../types'

interface Context {
  media: UseQueryResult<Dropdown[]>
  games: UseQueryResult<Dropdown[]>
  tournaments: UseQueryResult<Dropdown[]>
}

export const context = React.createContext({} as Context)
