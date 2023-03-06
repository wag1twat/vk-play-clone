import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex } from '@chakra-ui/react'
import { useSidebar } from './provider'
import { Dropdowns, Settings } from './ui'

export type SidebarRefCurrent = {
  visibility: boolean
  onToggle: () => void
} | null

const Sidebar = () => {
  const sidebar = useSidebar()

  if (!sidebar.visibility) {
    return null
  }
  return (
    <Drawer placement="left" onClose={sidebar.onClose} isOpen={sidebar.isOpen} autoFocus={false}>
      <DrawerOverlay top={'var(--chakra-header-height)'} />
      <DrawerContent
        background="linear-gradient(to top, #1e2125 0%, rgba(30, 33, 37, 0) 100%), #000;"
        mt={'72px'}
        mx={2}
        mb={2}
        containerProps={{
          top: 'var(--chakra-header-height)',
        }}
        borderRadius={10}
      >
        <DrawerBody px={2}>
          <Flex height="100%" flexDirection={'column'}>
            <Dropdowns />
            <Settings />
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export { Sidebar }
export default Sidebar
