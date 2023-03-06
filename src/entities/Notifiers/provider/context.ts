import React from 'react'
import { UseQueryResult } from 'react-query'
import { Notification } from '../model'

interface Context {
    notifications: UseQueryResult<Notification[]>
}

export const context = React.createContext<Context>({} as Context)
