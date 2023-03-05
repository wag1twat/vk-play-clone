import React from 'react'
import { Icon20MenuOutline } from '@vkontakte/icons'
import { Flex, HStack, Icon, IconButton, useBoolean, VStack } from '@chakra-ui/react'
import { Logo, Menu } from './ui'
import { SearchInput } from 'src/shared/Input'
import { HeaderLayout } from 'src/shared/Layout'

const Header = () => {
  const [isOpenSearch, searchControl] = useBoolean(false)

  const [searchValue, setSearchValue] = React.useState('')

  const searchInput = React.useMemo(() => {
    return (
      <SearchInput
        inputGroupProps={{
          onBlur: searchControl.off,
        }}
        inputProps={{
          value: searchValue,
          onChange: (e) => setSearchValue(e.target.value),
        }}
        onCancel={(e) => {
          e.stopPropagation()
          searchControl.off()
        }}
      />
    )
  }, [searchControl, searchValue])

  return (
    <HeaderLayout>
      <VStack spacing={3} width="inherit">
        <HStack spacing={6} width="inherit" py={3} height={16}>
          <HStack spacing={[3, 3, 3, 0]}>
            <IconButton
              variant="icon"
              aria-label="Меню"
              display={['flex', 'flex', 'flex', 'none']}
              size="sm"
            >
              <Icon as={Icon20MenuOutline} />
            </IconButton>
            <Logo />
          </HStack>
          <Menu
            flexGrow={1}
            isOpenSearch={isOpenSearch}
            searchToggle={searchControl.toggle}
            searchInput={
              <Flex width="100%" hidden={!isOpenSearch} display={['none', 'none', 'none', 'flex']}>
                {searchInput}
              </Flex>
            }
          />
        </HStack>
        <Flex
          width="inherit"
          hidden={!isOpenSearch}
          pb={3}
          display={['flex', 'flex', 'flex', 'none']}
        >
          {searchInput}
        </Flex>
      </VStack>
    </HeaderLayout>
  )
}

export { Header }
