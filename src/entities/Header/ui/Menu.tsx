import {
  Link,
  HStack,
  Icon,
  FlexProps,
  IconButton,
  Flex,
  Text,
  useBreakpoint,
} from '@chakra-ui/react'
import {
  Icon24Search,
  Icon24DiscountOutline,
  Icon24NotificationOutline,
  Icon24MessageOutline,
} from '@vkontakte/icons'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Dropdown } from 'src/features'
import { isRoute, routes } from 'src/proccess'
import { PinnedIconButton } from 'src/shared/PinnedIconButton'
import { GamesDropdown } from './GamesDropdown'

interface MenuProps extends FlexProps {
  isOpenSearch: boolean
  searchToggle: () => void
  searchInput: React.ReactNode
}

const searchVisibilityBreakpoints = ['base', 'xs', 'sm', 'md']

export const Menu = ({ isOpenSearch, searchToggle, searchInput, ...props }: MenuProps) => {
  const navigate = useNavigate()

  const location = useLocation()

  const breakPoint = useBreakpoint()

  const hiddenSearch = React.useMemo(
    () => isOpenSearch && !searchVisibilityBreakpoints.includes(breakPoint),
    [breakPoint, isOpenSearch]
  )

  return (
    <Flex alignItems="center" justifyContent={'flex-end'} {...props}>
      <HStack
        spacing={6}
        pt={2}
        flexGrow={1}
        hidden={isOpenSearch}
        display={['none', 'none', 'none', 'flex']}
      >
        <GamesDropdown />
        <Link
          onClick={() => navigate(routes.live.path)}
          variant="underlining"
          data-active={isRoute('live', location)}
        >
          <Text>Live</Text>
        </Link>
        <Link
          onClick={() => navigate(routes.tournaments.path)}
          variant="underlining"
          data-active={isRoute('tournaments', location)}
          position="relative"
        >
          <Text>Турниры</Text>
          <Dropdown />
        </Link>
        <Link
          onClick={() => navigate(routes.media.path)}
          variant="underlining"
          data-active={isRoute('media', location)}
          position="relative"
        >
          <Text>Медиа</Text>
          <Dropdown />
        </Link>
      </HStack>
      {searchInput}
      <IconButton
        variant="icon"
        aria-label="Поиск"
        onClick={searchToggle}
        hidden={hiddenSearch}
        mt={2}
        size="sm"
      >
        <Icon as={Icon24Search} />
      </IconButton>
      <HStack ml={3} mt={2} spacing={3} display={['none', 'none', 'none', 'flex']}>
        <IconButton size="sm" variant="icon" aria-label="Акции">
          <Icon as={Icon24DiscountOutline} />
        </IconButton>
        <PinnedIconButton size="sm" variant="icon" aria-label="Уведомления" pin={1}>
          <Icon as={Icon24NotificationOutline} />
        </PinnedIconButton>
        <IconButton size="sm" variant="icon" aria-label="Мессенджер">
          <Icon as={Icon24MessageOutline} />
        </IconButton>
      </HStack>
    </Flex>
  )
}
