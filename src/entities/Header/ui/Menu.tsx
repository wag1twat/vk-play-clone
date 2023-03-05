import { Link, HStack, Icon, IconButton, Text } from '@chakra-ui/react'
import {
  Icon24DiscountOutline,
  Icon24NotificationOutline,
  Icon24MessageOutline,
} from '@vkontakte/icons'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Dropdown, DropdownItem } from 'src/features'
import { isRoute, routes, useCoincidenceBreakpoint } from 'src/proccess'
import { PinnedIconButton } from 'src/shared/PinnedIconButton'
import { useGamesDropdownData, useMediaDropdownData, useTournamentsDropdownData } from '../model'

interface MenuProps {
  isOpenSearch: boolean
}

export const Menu = ({ isOpenSearch, children }: React.PropsWithChildren<MenuProps>) => {
  const navigate = useNavigate()

  const location = useLocation()

  const games = useGamesDropdownData()

  const tournaments = useTournamentsDropdownData()

  const media = useMediaDropdownData()

  const mediaVisible = useCoincidenceBreakpoint(['2xl', 'xl', 'lg'], !isOpenSearch)

  const tournamentsVisible = useCoincidenceBreakpoint(['2xl', 'xl', 'lg', 'xlg'], !isOpenSearch)

  const anyVisible = useCoincidenceBreakpoint(['2xl', 'xl', 'lg', 'xlg', 'md'], !isOpenSearch)

  const moreVisible = useCoincidenceBreakpoint(['xlg', 'md'])

  const userVisible = useCoincidenceBreakpoint(['2xl', 'xl', 'lg'])

  const moreDropdowns = React.useMemo(() => {
    return ([] as DropdownItem[]).concat(
      !mediaVisible ? [{ id: 1, group: 'media', label: 'Медиа', childrens: media }] : [],
      !tournamentsVisible
        ? [{ id: 1, group: 'tournaments', label: 'Турниры', childrens: tournaments }]
        : []
    )
  }, [media, mediaVisible, tournaments, tournamentsVisible])

  return (
    <HStack flexGrow={1} spacing={6} pt={2} justifyContent="flex-start">
      {anyVisible && (
        <Link
          onClick={() => navigate(routes.games.path)}
          variant="underlining-dropdown-trigger"
          data-active={isRoute('games', location)}
        >
          <Text>Игры</Text>
          <Dropdown dropdowns={games} />
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
          variant="underlining-dropdown-trigger"
          data-active={isRoute('tournaments', location)}
        >
          <Text>Турниры</Text>
          <Dropdown dropdowns={tournaments} />
        </Link>
      )}
      {mediaVisible && (
        <Link
          onClick={() => navigate(routes.media.path)}
          variant="underlining-dropdown-trigger"
          data-active={isRoute('media', location)}
        >
          <Text>Медиа</Text>
          <Dropdown dropdowns={media} />
        </Link>
      )}
      {moreVisible && (
        <Link
          variant={'underlining-dropdown-trigger'}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
        >
          <Text>Ещё</Text>
          <Dropdown dropdowns={moreDropdowns} />
        </Link>
      )}
      {children}
      {userVisible && (
        <>
          <IconButton size="sm" variant="icon" aria-label="Акции">
            <Icon as={Icon24DiscountOutline} />
          </IconButton>
          <PinnedIconButton size="sm" variant="icon" aria-label="Уведомления" pin={1}>
            <Icon as={Icon24NotificationOutline} />
          </PinnedIconButton>
          <IconButton size="sm" variant="icon" aria-label="Мессенджер">
            <Icon as={Icon24MessageOutline} />
          </IconButton>
        </>
      )}
    </HStack>
  )
}
