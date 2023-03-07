import { useUser } from 'src/entities'
import { useTranslate } from 'src/proccess/translate'
import { useGamesDropdownData } from '../useGamesDropdownData'
import { useMediaDropdownData } from '../useMediaDropdownData'
import { useTournamentsDropdownData } from '../useTournamentsDropdownData'
import { context } from './context'

export const Provider = (props: React.PropsWithChildren<{}>) => {
  const { profile } = useUser()

  const translate = useTranslate('Dropdowns')

  const games = useGamesDropdownData(profile.data?.id)
  const media = useMediaDropdownData(profile.data?.id)
  const tournaments = useTournamentsDropdownData(profile.data?.id)

  return (
    <context.Provider
      value={{
        games,
        tournaments,
        media,
      }}
      {...props}
    />
  )
}
