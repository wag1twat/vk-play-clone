import { HTMLChakraProps } from '@chakra-ui/react'

export interface SelectOption {
  label: string
  value: string
}

export interface BaseSelectProps extends HTMLChakraProps<'select'> {
  label?: string
  options: Array<SelectOption>
  getOptionLabel?: (opt: SelectOption) => string
  getValueLabel?: (
    value: string | number | readonly string[] | undefined
  ) => string | number | readonly string[] | undefined
}
