import { Path, PathValue } from 'shulga-app-core'
import { SelectOption } from 'src/shared/Select'
import { DropdownsTranslate, dropdownsTranslate } from './Dropdowns'
import { HeaderTranslate, headerTranslate } from './Header'
import { SidebarTranslate, sidebarTranslate } from './Sidebar'

const Entities = {
  Header: 'Header',
  Dropdowns: 'Dropdowns',
  Sidebar: 'Sidebar',
} as const

const Languages = {
  en: 'English',
  ru: 'Русский',
} as const

type Lang = keyof typeof Languages

const languagesOptions = (Object.keys(Languages) as Lang[]).reduce<SelectOption[]>(
  (acc, current) => [...acc, { value: current, label: Languages[current] }],
  []
)

type Entity = keyof typeof Entities

const TranslateGuards = {
  [Entities.Header]: headerTranslate,
  [Entities.Dropdowns]: dropdownsTranslate,
  [Entities.Sidebar]: sidebarTranslate,
}

type Translate = {
  [Entities.Header]: HeaderTranslate
  [Entities.Dropdowns]: DropdownsTranslate
  [Entities.Sidebar]: SidebarTranslate
}

type TranslateFn<Key extends keyof Translate> = <P extends Path<Translate[Key]>>(
  path: P,
  placeholder?: string
) => PathValue<Translate[Key], P>

export { languagesOptions, Languages, TranslateGuards }
export type { Translate, TranslateFn, Entity, Lang }
