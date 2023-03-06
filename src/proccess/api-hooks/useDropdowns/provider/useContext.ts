import React from 'react'
import { context } from './context'

export const useContext = () => {
    return React.useContext(context)
}