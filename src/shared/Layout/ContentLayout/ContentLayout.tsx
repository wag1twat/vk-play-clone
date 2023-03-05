import { BoxProps } from '@chakra-ui/react'
import React from 'react'
import { ThemingContent } from './ui'

const ContentLayout = (props: React.PropsWithChildren<BoxProps>) => {
  return <ThemingContent {...props} />
}

export { ContentLayout }
