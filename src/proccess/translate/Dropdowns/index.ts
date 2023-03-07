import { Record, Static, String } from 'runtypes'

export const dropdownsTranslate = Record({
  games: String,
  'games-free': String,
  'games-paid': String,
  'games-simple': String,
  'games-forGoyim': String,
  'games-forNorms': String,
  'games-forShrek': String,
  'games-novelties': String,
  'games-cloud': String,
  'games-market': String,
  media: String,
  'media-all': String,
  'media-news': String,
  'media-esports': String,
  'media-community': String,
  'media-future': String,
  tournaments: String,
  'tournaments-all': String,
  'tournaments-partners': String,
  'tournaments-ratings': String,
})

export type DropdownsTranslate = Static<typeof dropdownsTranslate>
