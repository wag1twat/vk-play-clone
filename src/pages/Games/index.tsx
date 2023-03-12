import { Text } from '@chakra-ui/react'
import React from 'react'
import { bigLorem } from 'src/proccess/lorem'
import { PageLayout } from 'src/shared/Layout'
import { ContentLayout } from 'src/theme/components'

const Games = () => {
  return (
    <PageLayout>
      <ContentLayout>
        <Text color="#fff">
          {bigLorem}
          {bigLorem}
          {bigLorem}
          {bigLorem}
          {bigLorem}
        </Text>
      </ContentLayout>
    </PageLayout>
  )
}

export default Games
