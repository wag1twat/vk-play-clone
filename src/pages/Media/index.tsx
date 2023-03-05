import { Text } from '@chakra-ui/react'
import React from 'react'
import { bigLorem } from 'src/proccess/lorem'

const Media = () => {
  return (
    <Text color="#fff">
      {bigLorem}
      {bigLorem}
      {bigLorem}
      {bigLorem}
      {bigLorem}
    </Text>
  )
}

export default Media
