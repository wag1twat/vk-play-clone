import React from 'react'
import { UseQueryResult } from 'react-query'
import { UserProfile } from 'src/proccess/api-hooks'

interface Context {
  isAuth: boolean
  profile: UseQueryResult<UserProfile>
}

export const context = React.createContext<Context>({} as Context)
