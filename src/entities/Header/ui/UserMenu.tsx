import React from 'react'
import { HStack, IconButton, Icon, Tooltip } from '@chakra-ui/react'
import {
  Icon24DiscountOutline,
  Icon24MessageOutline,
  Icon24NotificationOutline,
} from '@vkontakte/icons'
import { useNotifiers } from 'src/entities'
import { useCoincidenceBreakpoint, TranslateFn } from 'src/proccess'
import { PinnedIconButton } from 'src/shared/PinnedIconButton'

interface UserMenuProps {
  translate: TranslateFn<'Header'>
}

export const UserMenu = ({ translate }: UserMenuProps) => {
  const { notifications } = useNotifiers()

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
    </HStack>
  )
}
