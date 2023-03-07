import { Record, Static, String } from 'runtypes'

export const headerTranslate = Record({
    games: String,
    tournaments: String,
    media: String,
    more: String,
    "aria-label-search": String
})

export type HeaderTranslate = Static<typeof headerTranslate>