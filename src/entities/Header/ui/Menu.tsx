import { Link, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { HoverDropdown, DropdownItem } from 'src/features'
import { isRoute, routes, useCoincidenceBreakpoint } from 'src/proccess'
import { useDropdowns } from 'src/proccess/api-hooks'
import { TranslateFn } from 'src/proccess/translate'
import { UserMenu } from './UserMenu'

interface MenuProps {
  isOpenSearch: boolean
  translate: TranslateFn<'Header'>
}

export const Menu = ({ translate, isOpenSearch, children }: React.PropsWithChildren<MenuProps>) => {
  const navigate = useNavigate()

  const location = useLocation()

  const { games, tournaments, media } = useDropdowns()

  const mediaVisible = useCoincidenceBreakpoint(['2xl', 'xl', 'lg'], !isOpenSearch)

  const tournamentsVisible = useCoincidenceBreakpoint(['2xl', 'xl', 'lg', 'xlg'], !isOpenSearch)

  const anyVisible = useCoincidenceBreakpoint(['2xl', 'xl', 'lg', 'xlg', 'md'], !isOpenSearch)

  const moreVisible = useCoincidenceBreakpoint(['xlg', 'md'])

  const moreDropdowns = React.useMemo(() => {
    return ([] as DropdownItem[]).concat(
      !mediaVisible
        ? [
            {
              id: 1,
              group: 'media',
              label: translate('links.media', 'Медиа'),
              childrens: media.data,
            },
          ]
        : [],
      !tournamentsVisible
        ? [
            {
              id: 1,
              group: 'tournaments',
              label: translate('links.tournaments', 'Турниры'),
              childrens: tournaments.data,
            },
          ]
        : []
    )
  }, [media.data, mediaVisible, translate, tournaments.data, tournamentsVisible])

  return (
    <HStack flexGrow={1} spacing={6} pt={2} justifyContent="flex-start">
      {anyVisible && (
        <Link
          onClick={() => navigate(routes.games.path)}
          variant="underlining"
          data-active={isRoute('games', location)}
          data-dropdown={true}
        >
          <Text>{translate('links.games', 'Игры')}</Text>
          <HoverDropdown dropdowns={games.data} />
        </Link>
      )}
      {anyVisible && (
        <Link
          onClick={() => navigate(routes.live.path)}
          variant="underlining"
          data-active={isRoute('live', location)}
        >
          <Text>Live</Text>
        </Link>
      )}
      {tournamentsVisible && (
        <Link
          onClick={() => navigate(routes.tournaments.path)}
          variant="underlining"
          data-active={isRoute('tournaments', location)}
          data-dropdown={true}
        >
          <Text>{translate('links.tournaments', 'Турниры')}</Text>
          <HoverDropdown dropdowns={tournaments.data} />
        </Link>
      )}
      {mediaVisible && (
        <Link
          onClick={() => navigate(routes.media.path)}
          variant="underlining"
          data-dropdown={true}
          data-active={isRoute('media', location)}
        >
          <Text>{translate('links.media', 'Медиа')}</Text>
          <HoverDropdown dropdowns={media.data} />
        </Link>
      )}
      {moreVisible && (
        <Link
          data-dropdown={true}
          variant={'underlining'}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
        >
          <Text>{translate('links.more', 'Ещё')}</Text>
          <HoverDropdown dropdowns={moreDropdowns} />
        </Link>
      )}
      {children}
      <UserMenu translate={translate} />
    </HStack>
  )
}
