import { BoxProps } from '@chakra-ui/react'
import { ContentLayout } from '../ContentLayout'
import { ThemingHeaderWrapper, ThemingHeader } from './ui'

const HeaderLayout = (props: React.PropsWithChildren<BoxProps>) => {
  return (
    <ThemingHeaderWrapper>
      <ThemingHeader>
        <ContentLayout {...props} px={4} width="inherit" height="inherit" />
      </ThemingHeader>
    </ThemingHeaderWrapper>
  )
}

export { HeaderLayout }
