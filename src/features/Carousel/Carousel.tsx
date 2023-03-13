import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import { BoxProps } from '@chakra-ui/react'
import Slider, { Settings } from 'react-slick'
import { Icon24ChevronLeft, Icon24ChevronRight } from '@vkontakte/icons'
import { Sizes } from './model'
import {
  CarouselArrowIconLayout,
  CarouselSideLayout,
  CarouselLayout,
  CarouselItemLayout,
} from 'src/theme/components'

interface CarouselProps extends Sizes, BoxProps {}

export const Carousel = ({ slideWidth, slideHeight, children, ...props }: CarouselProps) => {
  const [ref, setRef] = React.useState<Slider | null>(null)

  const settings = React.useRef<Settings>({
    className: 'center',
    centerPadding: '60px',
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesPerRow: 1,
    speed: 500,
    variableWidth: true,
    adaptiveHeight: false,
    swipe: false,
    nextArrow: undefined,
    prevArrow: undefined,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  })

  React.useEffect(() => {
    console.log(ref?.innerSlider)
  }, [ref?.innerSlider])

  if (React.Children.count(children) === 0) {
    return null
  }
  return (
    <CarouselLayout {...props}>
      <CarouselSideLayout
        className="side-left"
        width={`calc(50% - ${slideWidth / 2}px)`}
        height={`${slideHeight}px`}
        left={0}
        onClick={ref?.slickPrev}
        _after={{
          left: 0,
          backgroundImage: 'linear-gradient(90deg, #000 10px, transparent 50%);',
        }}
      >
        <CarouselArrowIconLayout top={`${slideHeight / 2}px`} right={8}>
          <Icon24ChevronLeft />
        </CarouselArrowIconLayout>
      </CarouselSideLayout>
      <CarouselSideLayout
        className="side-right"
        width={`calc(50% - ${slideWidth / 2}px)`}
        height={`${slideHeight}px`}
        right={0}
        onClick={ref?.slickNext}
        _after={{
          right: 0,
          backgroundImage: 'linear-gradient(270deg, #000 10px, transparent 50%);',
        }}
      >
        <CarouselArrowIconLayout top={`${slideHeight / 2}px`} left={8}>
          <Icon24ChevronRight />
        </CarouselArrowIconLayout>
      </CarouselSideLayout>
      <Slider ref={setRef} {...settings.current}>
        {React.Children.map(children, (child, index) => {
          return (
            <CarouselItemLayout
              key={index}
              style={{ width: `${slideWidth}px` }}
              height={`${slideHeight}px`}
            >
              {child}
            </CarouselItemLayout>
          )
        })}
      </Slider>
    </CarouselLayout>
  )
}
