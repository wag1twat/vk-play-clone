import React from 'react'
import { useNotifications } from '../model'
import { context } from './context'

export const Provider = (props: React.PropsWithChildren<{}>) => {
  const notifications = useNotifications()

  return <context.Provider value={{ notifications }} {...props} />
}
