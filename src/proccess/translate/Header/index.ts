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
  profile: Record({
    notifications: String,
    vkplay: String,
    settings: String,
    support: String,
    lang: String,
    exit: String,
    'clickboard-id': Record({
      'aria-label': String,
      'toast-message': String,
    }),
  }),
})

export type HeaderTranslate = Static<typeof headerTranslate>
