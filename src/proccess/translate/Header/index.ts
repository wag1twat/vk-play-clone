import { Record, Static, String } from 'runtypes'

export const headerTranslate = Record({
  links: Record({
    games: String,
    tournaments: String,
    media: String,
    more: String,
    mine: String,
  }),
  'aria-lable': Record({
    search: String,
  }),
  tooltip: Record({
    search: String,
    sales: String,
    notifications: String,
    messenger: String,
  }),
})

export type HeaderTranslate = Static<typeof headerTranslate>
