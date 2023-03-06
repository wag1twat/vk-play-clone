import { HStack, IconButton, Icon } from '@chakra-ui/react'
import {
  Icon24DiscountOutline,
  Icon24MessageOutline,
  Icon24NotificationOutline,
} from '@vkontakte/icons'
import { useNotifiers } from 'src/entities'
import { useCoincidenceBreakpoint } from 'src/proccess'
import { PinnedIconButton } from 'src/shared/PinnedIconButton'

export const UserMenu = () => {
  const { notifications } = useNotifiers()

  const userVisible = useCoincidenceBreakpoint(['2xl', 'xl', 'lg'])

  if (!userVisible) {
    return null
  }
  return (
    <HStack spacing={6}>
      <IconButton size="sm" variant="icon" aria-label="Акции">
        <Icon as={Icon24DiscountOutline} />
      </IconButton>
      <PinnedIconButton
        size="sm"
        variant="icon"
        aria-label="Уведомления"
        pin={notifications.data?.length}
      >
        <Icon as={Icon24NotificationOutline} />
      </PinnedIconButton>
      <IconButton size="sm" variant="icon" aria-label="Мессенджер">
        <Icon as={Icon24MessageOutline} />
      </IconButton>
    </HStack>
  )
}
