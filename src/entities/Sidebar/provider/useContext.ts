import React from 'react'
import { context } from './context'

export function useContext() {
  return React.useContext(context)
}
