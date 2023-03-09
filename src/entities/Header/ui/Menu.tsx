import { Link, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Path } from 'shulga-app-core'
import { ExpirementalDropdownItem } from 'src/features'
import { ExpirementalDropdown } from 'src/features/Dropdown/ExpirementalDropdown'
import { isRoute, routes, useCoincidenceBreakpoint } from 'src/proccess'
import { useDropdowns } from 'src/proccess/api-hooks'
import { Translate, TranslateFn } from 'src/proccess/translate'
import { UserMenu } from './UserMenu'

interface MenuProps {
  isOpenSearch: boolean
  translate: TranslateFn<'Header'>
}

export const Menu = ({ translate, isOpenSearch, children }: React.PropsWithChildren<MenuProps>) => {
  const navigate = useNavigate()

  const location = useLocation()

  const { games, tournaments, media, translate: translateDropdown } = useDropdowns()

  const itemLabel = React.useCallback(
    (item: ExpirementalDropdownItem) =>
      translateDropdown(item.id as Path<Translate['Dropdowns']>, item.placeholder),
    [translateDropdown]
  )

  const mediaVisible = useCoincidenceBreakpoint(['2xl', 'xl', 'lg'], !isOpenSearch)

  const tournamentsVisible = useCoincidenceBreakpoint(['2xl', 'xl', 'lg', 'xlg'], !isOpenSearch)

  const anyVisible = useCoincidenceBreakpoint(['2xl', 'xl', 'lg', 'xlg', 'md'], !isOpenSearch)

  const moreVisible = useCoincidenceBreakpoint(['xlg', 'md'])

  return (
    <HStack flexGrow={1} spacing={6} pt={2} justifyContent="flex-start">
      {anyVisible && (
        <ExpirementalDropdown
          menuButtonProps={{
            p: 0,
            opacity: 1,
            width: 'min-content',
            _hover: {
              bg: 'transparent',
            },
          }}
          placement="bottom-start"
          offset={[-8, -2]}
          itemLabel={itemLabel}
          label={(props) => (
            <Link
              onClick={() => navigate(routes.games.path)}
              variant="underlining"
              data-active={isRoute('games', location)}
              data-hover={props.isOpen}
            >
              <Text>{translate('links.games', 'Игры')}</Text>
            </Link>
          )}
          items={games.data}
        />
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
        <ExpirementalDropdown
          menuButtonProps={{
            p: 0,
            opacity: 1,
            width: 'min-content',
            _hover: {
              bg: 'transparent',
            },
          }}
          placement="bottom-start"
          offset={[-8, -2]}
          itemLabel={itemLabel}
          label={(props) => (
            <Link
              onClick={() => navigate(routes.tournaments.path)}
              variant="underlining"
              data-active={isRoute('tournaments', location)}
              data-hover={props.isOpen}
            >
              <Text>{translate('links.tournaments', 'Турниры')}</Text>
            </Link>
          )}
          items={tournaments.data}
        />
      )}
      {mediaVisible && (
        <ExpirementalDropdown
          menuButtonProps={{
            p: 0,
            opacity: 1,
            width: 'min-content',
            _hover: {
              bg: 'transparent',
            },
          }}
          placement="bottom-start"
          offset={[-8, -2]}
          itemLabel={itemLabel}
          label={(props) => (
            <Link
              onClick={() => navigate(routes.media.path)}
              variant="underlining"
              data-active={isRoute('media', location)}
              data-hover={props.isOpen}
            >
              <Text>{translate('links.media', 'Медиа')}</Text>
            </Link>
          )}
          items={media.data}
        />
      )}
      {moreVisible && (
        <ExpirementalDropdown
          menuButtonProps={{
            p: 0,
            opacity: 1,
            width: 'min-content',
            _hover: {
              bg: 'transparent',
            },
          }}
          placement="bottom-start"
          itemLabel={itemLabel}
          offset={[-8, -2]}
          label={(props) => (
            <Link data-hover={props.isOpen} variant={'underlining'}>
              <Text>{translate('links.more', 'Ещё')}</Text>
            </Link>
          )}
          items={[
            {
              id: 'tournaments',
              group: '1',
              placeholder: 'Турниры',
              items: tournaments.data,
              visible: !tournamentsVisible,
            },
            {
              id: 'media',
              group: '1',
              placeholder: 'Медиа',
              items: media.data,
              visible: !mediaVisible,
            },
          ]}
        />
      )}
      {children}
      <UserMenu translate={translate} />
    </HStack>
  )
}
