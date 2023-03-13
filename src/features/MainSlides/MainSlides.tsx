import { Box, Flex, HStack, useBreakpointValue, chakra, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from '../Carousel'
import { useSlides } from './model'

export const MainSlides = () => {
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
  )
}
