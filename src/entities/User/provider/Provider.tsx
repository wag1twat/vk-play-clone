import React from 'react'
import { useUserProfile } from 'src/proccess/api-hooks'
import { context } from './context'

export const Provider = (props: React.PropsWithChildren<{}>) => {
  const [isAuth] = React.useState(true)

  const profile = useUserProfile()

  return <context.Provider value={{ isAuth, profile }} {...props} />
}
