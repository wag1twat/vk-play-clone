import React from 'react'
import { UseQueryResult } from 'react-query'
import { TranslateFn } from 'src/proccess/translate'
import { Dropdown } from '../types'

interface Context {
  media: UseQueryResult<Dropdown[]>
  games: UseQueryResult<Dropdown[]>
  tournaments: UseQueryResult<Dropdown[]>,
  translate: TranslateFn<"Dropdowns">
}

export const context = React.createContext({} as Context)
