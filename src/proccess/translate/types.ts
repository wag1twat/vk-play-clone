import { Path, PathValue } from 'shulga-app-core'
import { DropdownsTranslate, dropdownsTranslate } from './Dropdowns'
import { HeaderTranslate, headerTranslate } from './Header'

const Entities = {
  Header: 'Header',
  Dropdowns: "Dropdowns"
} as const

type Lang = 'en' | 'ru'

type Entity = keyof typeof Entities

const TranslateGuards = {
  [Entities.Header]: headerTranslate,
  [Entities.Dropdowns]: dropdownsTranslate
}

type Translate = {
  [Entities.Header]: HeaderTranslate,
  [Entities.Dropdowns]: DropdownsTranslate,
}

type TranslateFn<Key extends keyof Translate> = <P extends Path<Translate[Key]>>(path: P, placeholder?: string) => PathValue<Translate[Key], P> | string

export { TranslateGuards }
export type { Translate, TranslateFn, Entity, Lang }
