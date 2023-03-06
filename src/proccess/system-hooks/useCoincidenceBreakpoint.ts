import { useBreakpoint } from '@chakra-ui/react'
import { Breakpoints } from 'src/theme/breakpoints'

const useCoincidenceBreakpoint = (
  breakpoints: (keyof Breakpoints)[],
  ...comparisons: boolean[]
) => {
  const breakpount = useBreakpoint()

  return (
    breakpoints.includes(breakpount as keyof Breakpoints) &&
    comparisons.every((comparison) => comparison === true)
  )
}

export { useCoincidenceBreakpoint }
