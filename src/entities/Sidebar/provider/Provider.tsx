import { useDisclosure } from '@chakra-ui/react'
import { useCoincidenceBreakpoint } from 'src/proccess'
import { context } from './context'

export function Provider(props: React.PropsWithChildren<{}>) {
  const disclosure = useDisclosure({ defaultIsOpen: false })

  const visibility = !useCoincidenceBreakpoint(['base', 'xs', 'sm'])

  return <context.Provider value={{ ...disclosure, visibility }} {...props} />
}
