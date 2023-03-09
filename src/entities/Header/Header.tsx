import React from 'react'
import { Icon20Cancel, Icon20MenuOutline, Icon24Search } from '@vkontakte/icons'
import { Flex, HStack, Icon, IconButton, Tooltip, useDisclosure } from '@chakra-ui/react'
import { Logo, Menu } from './ui'
import { SearchInput } from 'src/shared/Input'
import { HeaderLayout } from 'src/shared/Layout'
import { useCoincidenceBreakpoint, useTranslate } from 'src/proccess'
import { BasicDialog } from 'src/features'
import { useSidebar } from '../Sidebar'

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const translate = useTranslate('Header')

  const searchInputController = useDisclosure({ defaultIsOpen: false })

  const sidebar = useSidebar()

  const [searchValue, setSearchValue] = React.useState('')

  const deferredSearchValue = React.useDeferredValue(searchValue)

  const modalVisible = useCoincidenceBreakpoint(['sm', 'xs', 'base'])

  return (
    <HeaderLayout>
      <Flex height="100%" justifyContent={'center'} flexDirection={'column'}>
        <HStack spacing={6}>
          <HStack spacing={[3, 3, 3, 0]}>
            {sidebar.visibility && (
              <IconButton variant="icon" aria-label="Меню" size="sm" onClick={sidebar.onToggle}>
                <Icon as={sidebar.isOpen ? Icon20Cancel : Icon20MenuOutline} />
              </IconButton>
            )}
            <Logo />
          </HStack>
          <Menu translate={translate} isOpenSearch={searchInputController.isOpen}>
            <Flex flexGrow={1} justifyContent="flex-end">
              {searchInputController.isOpen && !modalVisible && (
                <SearchInput
                  inputProps={{
                    value: deferredSearchValue,
                    onChange: (e) => {
                      e.stopPropagation()
                      setSearchValue(e.target.value)
                    },
                    onBlur: searchInputController.onClose,
                    autoFocus: true,
                  }}
                  onCancel={(e) => {
                    e.stopPropagation()
                    searchInputController.onClose()
                  }}
                />
              )}
              <Tooltip label={translate('tooltip.search', 'Поиск')} hasArrow shouldWrapChildren>
                <IconButton
                  hidden={searchInputController.isOpen && !modalVisible}
                  variant="icon"
                  aria-label={translate('aria-lable.search', 'Поиск')}
                  onClick={searchInputController.onToggle}
                  size="sm"
                >
                  <Icon as={Icon24Search} />
                </IconButton>
              </Tooltip>
            </Flex>
          </Menu>
        </HStack>
      </Flex>
      {modalVisible && (
        <BasicDialog
          disclosure={searchInputController}
          autoFocus
          useModalOverlay
          modalOverlayProps={{
            top: 'var(--chakra-header-height)',
          }}
          contentProps={{
            width: 'full',
            maxWidth: 'unset',
            borderRadius: 0,
            backgroundColor: '#000',
            m: 0,
            containerProps: {
              top: 'var(--chakra-header-height)',
            },
          }}
          bodyProps={{
            width: 'full',
            px: 4,
            backgroundColor: 'white.brand-100',
          }}
          Body={(props) => {
            return (
              <SearchInput
                inputProps={{
                  value: deferredSearchValue,
                  onChange: (e) => {
                    e.stopPropagation()
                    setSearchValue(e.target.value)
                  },
                }}
                onCancel={(e) => {
                  e.stopPropagation()
                  props.onClose()
                }}
              />
            )
          }}
        />
      )}
    </HeaderLayout>
  )
}

export { Header }
