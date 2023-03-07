import { chakra, HTMLChakraProps, ThemingProps } from '@chakra-ui/react'

export const AccordionButtonLeftIcon = (props: React.PropsWithChildren<{}>) => {
  return <chakra.span {...props} className="accordion-button-left-icon" />
}
export const AccordionButtonRightIcon = (
  props: React.PropsWithChildren<HTMLChakraProps<'span'> & ThemingProps>
) => {
  return <chakra.span {...props} className="accordion-button-left-icon" />
}
