import React from 'react'
import { context } from './context'

export const Provider = (props: React.PropsWithChildren<{}>) => {
  return <context.Provider value={{}} {...props} />
}
