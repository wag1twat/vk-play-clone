import { BoxProps } from '@chakra-ui/react'
import { ScrollLayout, PageBackground } from 'src/theme/components'

interface PageLayoutProps extends BoxProps {}

const PageLayout = ({
  backgroundImage = 'url(https://vkplay.ru/hotbox/gem_static/showcase/frontend/production/build/2597a9afc58a5907c613bf7bb6ddd6f3.svg);',
  ...props
}: PageLayoutProps) => {
  return (
    <ScrollLayout height={'calc(100vh - var(--chakra-header-height))'}>
      <PageBackground
        _before={{
          backgroundImage,
        }}
        {...props}
      />
    </ScrollLayout>
  )
}

export { PageLayout }
