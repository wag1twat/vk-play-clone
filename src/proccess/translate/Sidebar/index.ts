import { Record, Static, String } from 'runtypes'

export const sidebarTranslate = Record({
  profile: Record({
    notifications: String,
    vkplay: String,
    settings: String,
    support: String,
    lang: String,
    exit: String,
  }),
})

export type SidebarTranslate = Static<typeof sidebarTranslate>
