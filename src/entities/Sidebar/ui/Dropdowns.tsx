import { Icon } from '@chakra-ui/react'
import { Icon24BookSpreadOutline, Icon24Game, Icon28EmblemOutline } from '@vkontakte/icons'
import React from 'react'
import { Path } from 'shulga-app-core'
import { AccordinDropdown, DropdownItem } from 'src/features'
import { Translate } from 'src/proccess'
import { useDropdowns } from 'src/proccess/api-hooks'
import { ScrollLayout } from 'src/theme/components'

export const Dropdowns = () => {
  const { games, tournaments, media, translate } = useDropdowns()

  const getItemLabel = React.useCallback(
    (item: DropdownItem) => translate(item.key as Path<Translate['Dropdowns']>, item.placeholder),
    [translate]
  )

  return (
    <ScrollLayout px={2} flexGrow={1}>
      <AccordinDropdown
        getItemLabel={getItemLabel}
        dropdowns={[
          {
            id: 0,
            group: 'games',
            key: 'games',
            placeholder: 'Игры',
            leftIcon: <Icon as={Icon24Game} />,
            isLoading: games.isLoading,
            childrens: games.data,
          },
          {
            id: 1,
            group: 'tournaments',
            key: 'tournaments',
            placeholder: 'Турниры',
            leftIcon: (
              <Icon as={Icon28EmblemOutline} style={{ width: 'inherit', height: 'inherit' }} />
            ),
            isLoading: tournaments.isLoading,
            childrens: tournaments.data,
          },
          {
            id: 3,
            group: 'media',
            key: 'media',
            placeholder: 'Медиа',
            leftIcon: <Icon as={Icon24BookSpreadOutline} />,
            isLoading: media.isLoading,
            childrens: media.data,
          },
        ]}
      />
    </ScrollLayout>
  )
}
