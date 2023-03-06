import React from 'react'
import {
  IconButton,
  Input,
  InputGroup,
  InputGroupProps,
  InputLeftElement,
  InputProps,
  InputRightElement,
  Icon,
} from '@chakra-ui/react'
import { Icon20Search, Icon20Cancel } from '@vkontakte/icons'

interface SearchInputProps {
  inputProps?: InputProps
  inputGroupProps?: InputGroupProps
  onCancel?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const SearchInput = (props: SearchInputProps) => {
  const { inputProps, inputGroupProps, onCancel } = props

  return (
    <InputGroup variant="default" width="100%" {...inputGroupProps}>
      <InputLeftElement>
        <Icon20Search />
      </InputLeftElement>
      <Input placeholder="Поиск по сайту" {...inputProps} />
      <InputRightElement>
        <IconButton
          size="sm"
          variant={'icon'}
          color="white.brand-500"
          aria-label="Закрыть поиск"
          onClick={onCancel}
        >
          <Icon as={Icon20Cancel} />
        </IconButton>
      </InputRightElement>
    </InputGroup>
  )
}
