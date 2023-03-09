import React from 'react'
import { HStack, IconButton, Icon, Tooltip, Img, Text } from '@chakra-ui/react'
import {
  Icon20Check,
  Icon24DiscountOutline,
  Icon24Globe,
  Icon24MessageOutline,
  Icon24NotificationOutline,
  Icon24QuestionOutline,
  Icon24Settings,
  Icon24User,
} from '@vkontakte/icons'
import { useNotifiers, useUser } from 'src/entities'
import { useCoincidenceBreakpoint, TranslateFn, useLang } from 'src/proccess'
import { PinnedIconButton } from 'src/shared/PinnedIconButton'
import { ExpirementalDropdown } from 'src/features/Dropdown/ExpirementalDropdown'
import { CopyClickboard, useToast } from 'src/features'

interface UserMenuProps {
  translate: TranslateFn<'Header'>
}

export const UserMenu = ({ translate }: UserMenuProps) => {
  const { lang, changeLang } = useLang()

  const { notifications } = useNotifiers()

  const { profile } = useUser()

  const { system } = useToast()

  const userVisible = useCoincidenceBreakpoint(['2xl', 'xl', 'lg'])

  const tooltips = React.useMemo(() => {
    return {
      sales: translate('tooltip.sales', 'Акции'),
      messenger: translate('tooltip.messenger', 'Мессенджер'),
      notifications: translate('tooltip.notifications', 'Уведомления'),
    }
  }, [translate])

  if (!userVisible) {
    return null
  }
  return (
    <HStack spacing={6}>
      <Tooltip label={tooltips.sales} hasArrow>
        <IconButton size="sm" variant="icon" aria-label={tooltips.sales}>
          <Icon as={Icon24DiscountOutline} />
        </IconButton>
      </Tooltip>
      <Tooltip label={tooltips.notifications} hasArrow shouldWrapChildren>
        <PinnedIconButton
          size="sm"
          variant="icon"
          aria-label={tooltips.notifications}
          pin={notifications.data?.length}
        >
          <Icon as={Icon24NotificationOutline} />
        </PinnedIconButton>
      </Tooltip>
      <Tooltip label={tooltips.messenger} hasArrow>
        <IconButton size="sm" variant="icon" aria-label={tooltips.messenger}>
          <Icon as={Icon24MessageOutline} />
        </IconButton>
      </Tooltip>
      <ExpirementalDropdown
        binding="click"
        placement="bottom-start"
        onItemClick={(props) => {
          if (props.item.id === 'ru') {
            changeLang(props.item.id)
          }
          if (props.item.id === 'en') {
            changeLang(props.item.id)
          }
        }}
        menuButtonProps={{
          p: 0,
          opacity: 1,
          _hover: {
            bg: 'transparent',
          },
          width: 10,
        }}
        label={() => (
          <Img
            src="https://avatar.vkplay.ru/avatar/231555440.90.jpeg"
            height={10}
            width={10}
            borderRadius="50%"
          />
        )}
        items={[
          {
            id: 'vkplay',
            group: '1',
            placeholder: translate('profile.vkplay', 'Профиль VK Play'),
            leftIcon: <Icon24User />,
          },
          {
            id: 'settings',
            group: '1',
            placeholder: translate('profile.settings', 'Настройки профиля'),
            leftIcon: <Icon24Settings />,
            afterComponent: (
              <CopyClickboard
                ariaLabel={translate('profile.clickboard-id.aria-label', 'Скопировать ID')}
                value={profile.data?.id}
                hidden={!profile.data?.id}
                pl={12}
                onCopy={() =>
                  system(() => (
                    <Text width="full" textAlign="center">
                      {translate('profile.clickboard-id.toast-message', 'Скопировано')}
                    </Text>
                  ))
                }
              >{`ID: ${profile.data?.id}`}</CopyClickboard>
            ),
          },
          {
            id: 'support',
            group: '2',
            placeholder: translate('profile.support', 'Служба поддержки'),
            leftIcon: <Icon24QuestionOutline />,
          },
          {
            id: 'lang',
            group: '2',
            placeholder: translate('profile.lang', 'Язык'),
            leftIcon: <Icon24Globe />,
            items: [
              {
                id: 'en',
                group: '1',
                placeholder: 'English',
                leftIcon: <Icon20Check visibility={lang === 'en' ? 'visible' : 'hidden'} />,
              },
              {
                id: 'ru',
                group: '1',
                placeholder: 'Русский',
                leftIcon: <Icon20Check visibility={lang === 'ru' ? 'visible' : 'hidden'} />,
              },
            ],
          },
          {
            id: 'exit',
            group: '3',
            placeholder: translate('profile.exit', 'Выйти'),
          },
        ]}
      />
    </HStack>
  )
}
