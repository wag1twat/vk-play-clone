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
    (item: DropdownItem) => translate(item.id as Path<Translate['Dropdowns']>, item.placeholder),
    [translate]
  )

  return (
    <ScrollLayout px={2} flexGrow={1}>
      <AccordinDropdown
        getItemLabel={getItemLabel}
        dropdowns={[
          {
            id: 'games',
            group: 'games',
            placeholder: 'Игры',
            leftIcon: <Icon24Game />,
            items: games.data,
          },
          {
            group: 'tournaments',
            id: 'tournaments',
            placeholder: 'Турниры',
            leftIcon: <Icon as={Icon28EmblemOutline} width="inherit" height="inherit" />,
            items: tournaments.data,
          },
          {
            group: 'media',
            id: 'media',
            placeholder: 'Медиа',
            leftIcon: <Icon as={Icon24BookSpreadOutline} />,
            items: media.data,
          },
        ]}
      />
    </ScrollLayout>
  )
}
