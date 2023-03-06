import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  VStack,
} from '@chakra-ui/react'
import { Icon24Game, Icon28EmblemOutline, Icon24BookSpreadOutline } from '@vkontakte/icons'
import { AccordinDropdown } from 'src/features'
import { useDropdowns } from 'src/proccess/api-hooks'
import { ScrollLayout } from 'src/theme/components'
import { useSidebar } from './provider'

export type SidebarRefCurrent = {
  visibility: boolean
  onToggle: () => void
} | null

const Sidebar = () => {
  const sidebar = useSidebar()

  const { games, tournaments, media } = useDropdowns()

  if (!sidebar.visibility) {
    return null
  }
  return (
    <Drawer placement="left" onClose={sidebar.onClose} isOpen={sidebar.isOpen}>
      <DrawerOverlay top={'var(--chakra-header-height)'} />
      <DrawerContent
        background="linear-gradient(to top, #1e2125 0%, rgba(30, 33, 37, 0) 100%), #000;"
        mt={'72px'}
        mx={2}
        mb={2}
        containerProps={{
          top: 'var(--chakra-header-height)',
        }}
        borderRadius={10}
      >
        <DrawerBody>
          <Flex height="100%" flexDirection={'column'}>
            <ScrollLayout>
              <AccordinDropdown
                onItemClick={(item) => {
                  console.log(item)
                }}
                flexGrow={1}
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
                      <Icon
                        as={Icon28EmblemOutline}
                        style={{ width: 'inherit', height: 'inherit' }}
                      />
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
            <VStack height="300px"></VStack>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export { Sidebar }
export default Sidebar
