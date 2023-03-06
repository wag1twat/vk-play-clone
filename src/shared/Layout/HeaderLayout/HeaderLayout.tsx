import { BoxProps } from '@chakra-ui/react'
import { ContentLayout, HeaderWrapper } from 'src/theme/components'

const HeaderLayout = (props: React.PropsWithChildren<BoxProps>) => {
  return (
    <HeaderWrapper>
      <ContentLayout {...props} height="var(--chakra-header-height)" />
    </HeaderWrapper>
  )
}

export { HeaderLayout }
