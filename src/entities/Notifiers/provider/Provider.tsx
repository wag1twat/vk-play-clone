import React from 'react'
import { useUser } from 'src/entities'
import { useNotifications } from '../model'
import { context } from './context'

export const Provider = (props: React.PropsWithChildren<{}>) => {
  const { profile } = useUser()

  const notifications = useNotifications(profile.data?.id)

  return <context.Provider value={{ notifications }} {...props} />
}
