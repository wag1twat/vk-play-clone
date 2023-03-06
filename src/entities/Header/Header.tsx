import React from 'react'
import { Icon20Cancel, Icon20MenuOutline, Icon24Search } from '@vkontakte/icons'
import { Flex, HStack, Icon, IconButton, useDisclosure } from '@chakra-ui/react'
import { Logo, Menu } from './ui'
import { SearchInput } from 'src/shared/Input'
import { HeaderLayout } from 'src/shared/Layout'
import { useCoincidenceBreakpoint } from 'src/proccess'
import { BasicDialog } from 'src/features'
import { useSidebar } from '../Sidebar'

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const searchInputController = useDisclosure({ defaultIsOpen: false })

  const sidebar = useSidebar()

  const [searchValue, setSearchValue] = React.useState('')

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
          <Menu isOpenSearch={searchInputController.isOpen}>
            <Flex flexGrow={1} justifyContent="flex-end">
              {searchInputController.isOpen && !modalVisible && (
                <SearchInput
                  inputProps={{
                    value: searchValue,
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
              <IconButton
                hidden={searchInputController.isOpen && !modalVisible}
                variant="icon"
                aria-label="Поиск"
                onClick={searchInputController.onToggle}
                size="sm"
              >
                <Icon as={Icon24Search} />
              </IconButton>
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
                  value: searchValue,
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
