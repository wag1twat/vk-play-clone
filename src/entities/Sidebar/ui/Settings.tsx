import { Divider, VStack, Icon, Flex, chakra, IconButton, Text } from '@chakra-ui/react'
import {
  Icon24CopyOutline,
  Icon24NotificationOutline,
  Icon24QuestionOutline,
  Icon24Settings,
  Icon24UserOutline,
} from '@vkontakte/icons'
import React from 'react'
import { useNotifiers } from 'src/entities/Notifiers'
import { useUser } from 'src/entities/User'
import { useToast } from 'src/features'
import { AccordionItemButton } from 'src/features/Dropdown/ui'
import { useCopyClickboard } from 'src/proccess'
import { Pin } from 'src/theme/components'

export const Settings = () => {
  const { system } = useToast()

  const { isAuth, profile } = useUser()

  const { notifications } = useNotifiers()

  const copyClickboard = useCopyClickboard()

  return (
    <VStack px={2} spacing={2} height="fit-content" fontSize={'lg'} color="white.brand-900">
      <Divider color="inherit" />
      {isAuth && (
        <AccordionItemButton
          leftIcon={<Icon color="white.brand-700" as={Icon24NotificationOutline} />}
          rightIcon={
            <Pin hidden={!notifications.data?.length} position="static">
              {notifications.data?.length}
            </Pin>
          }
          fontSize="inherit"
          color="inherit"
          hidden={!profile.data?.id}
        >
          Уведомления
        </AccordionItemButton>
      )}
      <AccordionItemButton
        fontSize="inherit"
        color="inherit"
        leftIcon={<Icon color="white.brand-700" as={Icon24QuestionOutline} />}
      >
        Служба поддержки
      </AccordionItemButton>
      {isAuth && (
        <AccordionItemButton
          fontSize="inherit"
          color="inherit"
          leftIcon={<Icon color="white.brand-700" as={Icon24UserOutline} />}
          hidden={!profile.data?.id}
        >
          Профиль VK Play
        </AccordionItemButton>
      )}
      {isAuth && (
        <Flex
          fontSize="inherit"
          color="white.brand-150"
          fontWeight={400}
          letterSpacing=".6px"
          width="100%"
          pl={8}
          hidden={!profile.data?.id}
        >
          <chakra.span userSelect={'none'}>ID: {profile.data?.id}</chakra.span>
          <chakra.span>
            <IconButton
              ml={2}
              size="sm"
              color="white.brand-200"
              variant="icon"
              aria-label="Скопировать ID"
              onClick={() =>
                copyClickboard(profile.data?.id, () =>
                  system(() => (
                    <Text width="full" textAlign="center">
                      Скопировано
                    </Text>
                  ))
                )
              }
            >
              <Icon as={Icon24CopyOutline} />
            </IconButton>
          </chakra.span>
        </Flex>
      )}
      {isAuth && (
        <AccordionItemButton
          fontSize={'lg'}
          color="white.brand-900"
          leftIcon={<Icon color="white.brand-700" as={Icon24Settings} />}
          hidden={!profile.data?.id}
        >
          Настройки профиля
        </AccordionItemButton>
      )}
      <Divider color="inherit" />
    </VStack>
  )
}
