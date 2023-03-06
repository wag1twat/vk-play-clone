import { useGamesDropdownData } from '../useGamesDropdownData'
import { useMediaDropdownData } from '../useMediaDropdownData'
import { useTournamentsDropdownData } from '../useTournamentsDropdownData'
import { context } from './context'

export const Provider = (props: React.PropsWithChildren<{}>) => {
  const games = useGamesDropdownData()
  const media = useMediaDropdownData()
  const tournaments = useTournamentsDropdownData()

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
