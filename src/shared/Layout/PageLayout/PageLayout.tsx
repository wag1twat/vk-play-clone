import { Box, BoxProps } from '@chakra-ui/react'
import { ContentLayout } from '../ContentLayout'
import { ScrollLayout } from '../ScrollLayout'

interface PageLayoutProps extends BoxProps {}

const PageLayout = ({ backgroundImage, ...props }: PageLayoutProps) => {
  return (
    <ScrollLayout height={'calc(100dvh - var(--chakra-header-height))'}>
      <Box
        position="relative"
        minHeight={'calc(100dvh - var(--chakra-header-height))'}
        __css={{
          ':before': {
            content: `""`,
            position: 'absolute',
            zIndex: -1,
            top: 0,
            left: 0,
            right: 0,
            height: '1080px',
            background: 'no-repeat 50% 0',
            maxHeight: '100%',
          },
          ':after': {
            content: `""`,
            position: 'absolute',
            zIndex: -2,
            top: 0,
            left: 0,
            right: 0,
            background: '#000',
            height: '100%',
          },
        }}
        _before={{
          backgroundImage:
            'url(https://vkplay.ru/hotbox/gem_static/showcase/frontend/production/build/2597a9afc58a5907c613bf7bb6ddd6f3.svg);',
          backgroundSize: '1920px auto',
        }}
      >
        <ContentLayout {...props} px={4} />
      </Box>
    </ScrollLayout>
  )
}

export { PageLayout }
