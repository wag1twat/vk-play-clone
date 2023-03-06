import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  VStack,
  chakra,
  IconButton,
  Divider,
} from '@chakra-ui/react'
import {
  Icon24Game,
  Icon28EmblemOutline,
  Icon24BookSpreadOutline,
  Icon24NotificationOutline,
  Icon24QuestionOutline,
  Icon24UserOutline,
  Icon24CopyOutline,
  Icon24Settings,
} from '@vkontakte/icons'
import { AccordinDropdown } from 'src/features'
import { AccordionItemButton } from 'src/features/Dropdown/ui'
import { useDropdowns } from 'src/proccess/api-hooks'
import { Pin, ScrollLayout } from 'src/theme/components'
import { useNotifiers } from '../Notifiers'
import { useSidebar } from './provider'

export type SidebarRefCurrent = {
  visibility: boolean
  onToggle: () => void
} | null

const Sidebar = () => {
  const { notifications } = useNotifiers()

  const sidebar = useSidebar()

  const { games, tournaments, media } = useDropdowns()

  if (!sidebar.visibility) {
    return null
  }
  return (
    <Drawer placement="left" onClose={sidebar.onClose} isOpen={sidebar.isOpen} autoFocus={false}>
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
        <DrawerBody px={2}>
          <Flex height="100%" flexDirection={'column'}>
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
            <VStack px={2} spacing={2} height="fit-content" fontSize={'lg'} color="white.brand-900">
              <Divider color="inherit" />
              <AccordionItemButton
                leftIcon={<Icon color="white.brand-700" as={Icon24NotificationOutline} />}
                rightIcon={
                  <Pin hidden={!notifications.data?.length} position="static">
                    {notifications.data?.length}
                  </Pin>
                }
                fontSize="inherit"
              >
                Уведомления
              </AccordionItemButton>
              <AccordionItemButton
                fontSize="inherit"
                leftIcon={<Icon color="white.brand-700" as={Icon24QuestionOutline} />}
              >
                Служба поддержки
              </AccordionItemButton>
              <AccordionItemButton
                fontSize="inherit"
                leftIcon={<Icon color="white.brand-700" as={Icon24UserOutline} />}
              >
                Профиль VK Play
              </AccordionItemButton>
              <Flex
                fontSize="inherit"
                color="white.brand-150"
                fontWeight={400}
                letterSpacing=".6px"
                width="100%"
                pl={8}
              >
                <chakra.span userSelect={'none'}>ID: 231555440</chakra.span>
                <chakra.span>
                  <IconButton
                    ml={2}
                    size="sm"
                    color="white.brand-150"
                    variant="icon"
                    aria-label="Скопировать ID"
                  >
                    <Icon as={Icon24CopyOutline} />
                  </IconButton>
                </chakra.span>
              </Flex>
              <AccordionItemButton
                fontSize="inherit"
                leftIcon={<Icon color="white.brand-700" as={Icon24Settings} />}
              >
                Настройки профиля
              </AccordionItemButton>
              <Divider color="inherit" />
            </VStack>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export { Sidebar }
export default Sidebar
