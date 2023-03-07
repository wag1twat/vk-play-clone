import { Record, Static, String } from 'runtypes'

export const headerTranslate = Record({
  links: Record({
    games: String,
    tournaments: String,
    media: String,
    more: String,
  }),
  'aria-lable': Record({
    search: String,
  }),
})

export type HeaderTranslate = Static<typeof headerTranslate>
