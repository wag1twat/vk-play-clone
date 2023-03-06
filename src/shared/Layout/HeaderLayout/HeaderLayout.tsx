import { BoxProps } from '@chakra-ui/react'
import { ContentLayout, HeaderBackground, HeaderWrapper } from 'src/theme/components'

const HeaderLayout = (props: React.PropsWithChildren<BoxProps>) => {
  return (
    <HeaderWrapper>
      <HeaderBackground>
        <ContentLayout {...props} height="var(--chakra-header-height)" />
      </HeaderBackground>
    </HeaderWrapper>
  )
}

export { HeaderLayout }
