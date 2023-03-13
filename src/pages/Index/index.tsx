import React from 'react'
import { Box, Flex, useBreakpointValue, chakra, Button, HStack } from '@chakra-ui/react'
import { Carousel } from 'src/features/Carousel'
import { bigLorem } from 'src/proccess/lorem'
import { PageLayout } from 'src/shared/Layout'
import { ContentLayout } from 'src/theme/components'

const slides = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1577741314755-048d8525d31e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    desc: 'Сразитесь с роботами и лабораторными монстрами, устраните причину сбоя и узнайте, что скрывается за мечтой об идеальном будущем!',
    button: 'Играть',
    gradient: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    desc: 'Сразитесь с роботами и лабораторными монстрами, устраните причину сбоя и узнайте, что скрывается за мечтой об идеальном будущем!',
    button: 'Играть',
    gradient: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    desc: 'Сразитесь с роботами и лабораторными монстрами, устраните причину сбоя и узнайте, что скрывается за мечтой об идеальном будущем!',
    button: 'Играть',
    gradient: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    desc: 'Сразитесь с роботами и лабораторными монстрами, устраните причину сбоя и узнайте, что скрывается за мечтой об идеальном будущем!',
    button: 'Играть',
    gradient: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1500995617113-cf789362a3e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    desc: 'Сразитесь с роботами и лабораторными монстрами, устраните причину сбоя и узнайте, что скрывается за мечтой об идеальном будущем!',
    button: 'Играть',
    gradient: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    desc: 'Сразитесь с роботами и лабораторными монстрами, устраните причину сбоя и узнайте, что скрывается за мечтой об идеальном будущем!',
    button: 'Играть',
    gradient: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    desc: 'Сразитесь с роботами и лабораторными монстрами, устраните причину сбоя и узнайте, что скрывается за мечтой об идеальном будущем!',
    button: 'Играть',
    gradient: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1629760946220-5693ee4c46ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    desc: 'Сразитесь с роботами и лабораторными монстрами, устраните причину сбоя и узнайте, что скрывается за мечтой об идеальном будущем!',
    button: 'Играть',
    gradient: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);',
  },
]
const Index = () => {
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
              <Box
                key={slide.id}
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

export default Index
