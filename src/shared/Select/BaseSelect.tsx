import { Box, chakra, Flex, Icon, Stack } from '@chakra-ui/react'
import { Icon24ChevronDown } from '@vkontakte/icons'
import React from 'react'
import { BaseSelectProps, SelectOption } from './types'

export const BaseSelect = ({
  label,
  options,
  getOptionLabel,
  getValueLabel,
  ...props
}: BaseSelectProps) => {
  const getLabel = React.useCallback(
    (opt: SelectOption) => {
      return getOptionLabel ? getOptionLabel(opt) : opt.label
    },
    [getOptionLabel]
  )
  const getValue = React.useCallback(
    (value: string | number | readonly string[] | undefined) => {
      return getValueLabel ? getValueLabel(value) : value
    },
    [getValueLabel]
  )
  return (
    <Stack
      width="full"
      direction={'row'}
      color="white.brand-700"
      fontWeight={400}
      fontSize="md"
      height={6}
      _hover={{
        color: 'white.brand-900',
      }}
    >
      <Flex flexGrow={1}>{label}</Flex>
      <Flex position={'relative'}>
        <chakra.select
          width="inherit"
          height="inherit"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          opacity={0}
          color="blackAlpha.900"
          cursor={'pointer'}
          {...props}
        >
          {options.map((opt) => {
            return (
              <option key={opt.value} value={opt.value}>
                {getLabel(opt)}
              </option>
            )
          })}
        </chakra.select>
        <Box width="inherit" height="inherit">
          <chakra.span>{getValue(props.value)}</chakra.span>
          <chakra.span pl={2} float="right">
            <Icon as={Icon24ChevronDown} />
          </chakra.span>
        </Box>
      </Flex>
    </Stack>
  )
}
