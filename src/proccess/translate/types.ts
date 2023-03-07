import { HeaderTranslate, headerTranslate } from "./Header"

type Lang = 'en' | 'ru'

enum Entities {
    'Header' = 'Header'
}

type Entity = keyof typeof Entities

type T<K> = (key: K, placeholder?: string) => string

const TranslateGuards = {
    [Entities.Header]: headerTranslate
}

type Translate = {
    [Entities.Header]: HeaderTranslate
}

type UseTranslateResult = {
    [Entities.Header]: T<keyof HeaderTranslate>
}


export { TranslateGuards }
export type { Translate, UseTranslateResult, Entity, Lang }