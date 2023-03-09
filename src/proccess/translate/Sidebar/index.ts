import { Record, Static, String } from 'runtypes'

export const sidebarTranslate = Record({
  profile: Record({
    notifications: String,
    vkplay: String,
    settings: String,
    support: String,
    lang: String,
    exit: String,
    "clickboard-id": Record({
        "aria-label": String,
        "toast-message": String
      })
  }),
})

export type SidebarTranslate = Static<typeof sidebarTranslate>
