import { Location } from 'react-router-dom'
import { UrlSerializer } from 'shulga-app-core'

const url = new UrlSerializer('')

const base = url.build()

const games = base.extend().path('games').build()
const live = base.extend().path('live').build()
const tournaments = base.extend().path('tournaments').build()
const media = base.extend().path('media').build()

const routes = {
  games,
  live,
  tournaments,
  media,
}

const isRoute = (key: keyof typeof routes, location: Location) => {
  return routes[key].path === location.pathname
}

export { routes, isRoute }
