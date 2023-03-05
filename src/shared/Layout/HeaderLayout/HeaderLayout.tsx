import { BoxProps } from '@chakra-ui/react'
import { ContentLayout } from '../ContentLayout'
import { ThemingHeaderWrapper, ThemingHeader } from './ui'

const HeaderLayout = (props: React.PropsWithChildren<BoxProps>) => {
  return (
    <ThemingHeaderWrapper
      ref={(ref) => {
        const root = document.documentElement

        root.style.setProperty(
          '--header-height',
          ref?.offsetHeight ? `${ref?.offsetHeight}px` : null
        )
      }}
    >
      <ThemingHeader>
        <ContentLayout {...props} px={4} minHeight={16} />
      </ThemingHeader>
    </ThemingHeaderWrapper>
  )
}

export { HeaderLayout }
