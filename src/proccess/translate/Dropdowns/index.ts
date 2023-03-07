import { Record, Static, String } from 'runtypes'

export const dropdownsTranslate = Record({
  games: Record({
    free: String,
    paid: String,
    simple: String,
    forGoyim: String,
    forNorms: String,
    forShrek: String,
    novelties: String,
    cloud: String,
    market: String,
  }),
  media: Record({
    all: String,
    news: String,
    esports: String,
    community: String,
    future: String,
  }),
  tournaments: Record({
    all: String,
    partners: String,
    rating: String,
  }),
})

export type DropdownsTranslate = Static<typeof dropdownsTranslate>
