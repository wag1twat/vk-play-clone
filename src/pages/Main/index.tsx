import React from 'react'
import { Box, Flex, useBreakpointValue, chakra, Button, HStack } from '@chakra-ui/react'
import { Carousel } from 'src/features/Carousel'
import { bigLorem } from 'src/proccess/lorem'
import { PageLayout } from 'src/shared/Layout'
import { ContentLayout } from 'src/theme/components'
import { useSlides } from './model'
import { Link } from 'react-router-dom'

const Main = () => {
  const basicSlideWidth = React.useRef<number>(760)
  const aspect = React.useRef(1.9)

  const slideWidth = useBreakpointValue([
    basicSlideWidth.current - (basicSlideWidth.current * 50) / 100,
    basicSlideWidth.current - (basicSlideWidth.current * 50) / 100,
    basicSlideWidth.current - (basicSlideWidth.current * 40) / 100,
    basicSlideWidth.current - (basicSlideWidth.current * 40) / 100,
    basicSlideWidth.current - (basicSlideWidth.current * 20) / 100,
    basicSlideWidth.current - (basicSlideWidth.current * 20) / 100,
    basicSlideWidth.current,
    basicSlideWidth.current,
  ])

  const slides = useSlides()

  if (slideWidth === undefined) {
    return null
  }
  return (
    <PageLayout>
      <Flex py={6} justifyContent="center">
        <Carousel
          slideHeight={basicSlideWidth.current / aspect.current}
          slideWidth={slideWidth}
          width="100%"
          maxWidth="2200px"
        >
          {slides.map((slide) => {
            return (
              <Link key={slide.id} to={slide.to}>
                <Box
                  backgroundImage={slide.url}
                  backgroundPosition="center"
                  backgroundSize="cover"
                  height="100%"
                  width="100%"
                  cursor="pointer"
                  position="relative"
                >
                  <HStack
                    position="absolute"
                    bottom={0}
                    spacing={6}
                    p={6}
                    alignItems="flex-end"
                    bgImage={slide.gradient}
                  >
                    <Box>
                      <chakra.span color="white.brand-900">{slide.desc}</chakra.span>
                    </Box>
                    <Box flexBasis="30%">
                      <Button width="full">{slide.button}</Button>
                    </Box>
                  </HStack>
                </Box>
              </Link>
            )
          })}
        </Carousel>
      </Flex>
      <ContentLayout color="#fff">
        {bigLorem}
        {bigLorem}
        {bigLorem}
        {bigLorem}
        {bigLorem}
      </ContentLayout>
    </PageLayout>
  )
}

export default Main
