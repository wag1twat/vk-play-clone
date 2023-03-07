import { Path, PathValue } from 'shulga-app-core'
import { HeaderTranslate, headerTranslate } from './Header'

type Lang = 'en' | 'ru'

enum Entities {
  'Header' = 'Header',
}

type Entity = keyof typeof Entities


const TranslateGuards = {
  [Entities.Header]: headerTranslate,
}

type Translate = {
  [Entities.Header]: HeaderTranslate
}

type UseTranslateResult = {
  [Entities.Header]: <P extends Path<Translate['Header']>>(path: P, placeholder?: string) => PathValue<Translate['Header'], P> | string
}

export { TranslateGuards }
export type { Translate, UseTranslateResult, Entity, Lang }
