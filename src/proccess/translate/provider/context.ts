import React from 'react'
import { Lang } from '../types'

interface Context {
    lang: Lang,
    changeLang: (lang: Lang) => void
}

export const context = React.createContext<Context>({} as Context)