import React from 'react'
import { Lang } from '../types'
import { context } from './context'

const key = 'lang'

export const Provider = (props: React.PropsWithChildren<{}>) => {
  const [lang, setLang] = React.useState<Lang>(
    () => (globalThis.localStorage.getItem(key) as Lang | null) || 'en'
  )

  const changeLang = React.useCallback((lang: Lang) => {
    setLang(() => lang)
    globalThis.localStorage.setItem(key, lang)
  }, [])

  return <context.Provider value={{ lang, changeLang }} {...props} />
}
