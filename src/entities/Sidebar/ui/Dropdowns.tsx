import { Icon } from '@chakra-ui/react'
import { Icon24BookSpreadOutline, Icon24Game, Icon28EmblemOutline } from '@vkontakte/icons'
import React from 'react'
import { AccordinDropdown } from 'src/features'
import { useDropdowns } from 'src/proccess/api-hooks'
import { ScrollLayout } from 'src/theme/components'

export const Dropdowns = () => {
  const { games, tournaments, media } = useDropdowns()

  return (
    <ScrollLayout px={2} flexGrow={1}>
      <AccordinDropdown
        onItemClick={(item) => {
          console.log(item)
        }}
        dropdowns={[
          {
            id: 0,
            group: 'games',
            label: 'Игры',
            leftIcon: <Icon as={Icon24Game} />,
            isLoading: games.isLoading,
            childrens: games.data,
          },
          {
            id: 1,
            group: 'tournaments',
            label: 'Турниры',
            leftIcon: (
              <Icon as={Icon28EmblemOutline} style={{ width: 'inherit', height: 'inherit' }} />
            ),
            isLoading: tournaments.isLoading,
            childrens: tournaments.data,
          },
          {
            id: 3,
            group: 'media',
            label: 'Медиа',
            leftIcon: <Icon as={Icon24BookSpreadOutline} />,
            isLoading: media.isLoading,
            childrens: media.data,
          },
        ]}
      />
    </ScrollLayout>
  )
}
