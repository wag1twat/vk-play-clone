import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, Icon } from '@chakra-ui/react'
import { Icon24Game, Icon28EmblemOutline, Icon24BookSpreadOutline } from '@vkontakte/icons'
import { AccordinDropdown } from 'src/features'
import { useDropdowns } from 'src/proccess/api-hooks'
import { ScrollLayout } from 'src/shared/Layout'
import { useSidebar } from './provider'

export type SidebarRefCurrent = {
  visibility: boolean
  onToggle: () => void
} | null

export const Sidebar = () => {
  const sidebar = useSidebar()

  const { games, tournaments, media } = useDropdowns()

  if (!sidebar.visibility) {
    return null
  }
  return (
    <Drawer placement="left" onClose={sidebar.onClose} isOpen={sidebar.isOpen}>
      <DrawerOverlay top={16} />
      <DrawerContent
        background="linear-gradient(to top, #1e2125 0%, rgba(30, 33, 37, 0) 100%), #000;"
        mt={'72px'}
        mx={2}
        mb={2}
        containerProps={{
          top: 16,
        }}
        borderRadius={10}
      >
        <ScrollLayout>
          <DrawerBody>
            {/* <AccordinDropdown label="Игры" dropdowns={games} />
            <AccordinDropdown label="Турниры" dropdowns={tournaments} />
            <AccordinDropdown label="Медиа" dropdowns={media} /> */}
            <AccordinDropdown
              dropdowns={[
                {
                  id: 0,
                  group: 'games',
                  label: 'Игры',
                  leftIcon: <Icon as={Icon24Game} />,
                  childrens: games,
                },
                {
                  id: 1,
                  group: 'tournaments',
                  label: 'Турниры',
                  leftIcon: (
                    <Icon
                      as={Icon28EmblemOutline}
                      style={{ width: 'inherit', height: 'inherit' }}
                    />
                  ),
                  childrens: tournaments,
                },
                {
                  id: 3,
                  group: 'media',
                  label: 'Медиа',
                  leftIcon: <Icon as={Icon24BookSpreadOutline} />,
                  childrens: media,
                },
              ]}
            />
          </DrawerBody>
        </ScrollLayout>
      </DrawerContent>
    </Drawer>
  )
}
