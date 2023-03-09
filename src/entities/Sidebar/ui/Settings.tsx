import { Divider, VStack, Icon, chakra, Text, Button } from '@chakra-ui/react'
import {
  Icon24NotificationOutline,
  Icon24QuestionOutline,
  Icon24Settings,
  Icon24UserOutline,
} from '@vkontakte/icons'
import { Guards } from 'shulga-app-core'
import { useNotifiers, useUser } from 'src/entities'
import { CopyClickboard, useToast } from 'src/features'
import {
  AccordionButtonLeftIcon,
  AccordionButtonRightIcon,
  AccordionButtonText,
} from 'src/features/Dropdown/ui'
import { Lang, Languages, languagesOptions, TranslateFn, useLang } from 'src/proccess'
import { BaseSelect } from 'src/shared/Select'
import { Pin } from 'src/theme/components'

interface SettingsProps {
  translate: TranslateFn<'Sidebar'>
}

export const Settings = ({ translate }: SettingsProps) => {
  const { lang, changeLang } = useLang()

  const { system } = useToast()

  const { isAuth, profile } = useUser()

  const { notifications } = useNotifiers()

  return (
    <VStack p={2} height="fit-content" alignItems={'flex-start'}>
      <Divider variant="accordion" />
      {isAuth && (
        <Button size="xs" variant="accordion" data-expander={false} hidden={!profile.data?.id}>
          <AccordionButtonLeftIcon>
            <Icon as={Icon24NotificationOutline} />
          </AccordionButtonLeftIcon>
          <AccordionButtonText>
            {translate('profile.notifications', 'Уведомления')}
          </AccordionButtonText>
          <AccordionButtonRightIcon display={'flex'}>
            <Pin hidden={!notifications.data?.length} position="static">
              {notifications.data?.length}
            </Pin>
          </AccordionButtonRightIcon>
        </Button>
      )}
      <Button size="xs" variant="accordion" data-expander={false}>
        <AccordionButtonLeftIcon>
          <Icon as={Icon24QuestionOutline} />
        </AccordionButtonLeftIcon>
        <AccordionButtonText>
          {translate('profile.support', 'Служба поддержки')}
        </AccordionButtonText>
      </Button>
      {isAuth && (
        <Button size="xs" variant="accordion" data-expander={false} hidden={!profile.data?.id}>
          <AccordionButtonLeftIcon>
            <Icon as={Icon24UserOutline} />
          </AccordionButtonLeftIcon>
          <AccordionButtonText>
            {translate('profile.vkplay', 'Профиль VK Play')}
          </AccordionButtonText>
        </Button>
      )}
      {isAuth && (
        <CopyClickboard
          ariaLabel={translate('profile.clickboard-id.aria-label', 'Скопировать ID')}
          value={profile.data?.id}
          hidden={!profile.data?.id}
          pl={8}
          onCopy={() =>
            system(() => (
              <Text width="full" textAlign="center">
                {translate('profile.clickboard-id.toast-message', 'Скопировано')}
              </Text>
            ))
          }
        >{`ID: ${profile.data?.id}`}</CopyClickboard>
      )}
      {isAuth && (
        <Button size="xs" variant="accordion" data-expander={false} hidden={!profile.data?.id}>
          <AccordionButtonLeftIcon>
            <Icon as={Icon24Settings} />
          </AccordionButtonLeftIcon>
          <AccordionButtonText>
            {translate('profile.settings', 'Настройки профиля')}
          </AccordionButtonText>
        </Button>
      )}
      <Divider variant="accordion" />
      <BaseSelect
        value={lang}
        onChange={(e) => changeLang(e.target.value as Lang)}
        getValueLabel={(value) => (Guards.isString(value) ? Languages[value as Lang] : value)}
        options={languagesOptions}
        label={translate('profile.lang', 'Язык')}
      />
      {isAuth && (
        <Button size="sm" fontSize={'md'} variant={'link'}>
          <chakra.span width="full" textAlign="left">
            {translate('profile.exit', 'Выйти')}
          </chakra.span>
        </Button>
      )}
    </VStack>
  )
}
