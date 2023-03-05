import { Icon, IconProps } from '@chakra-ui/react'
import { ReactComponent as LogoSvg } from 'src/assets/logo-vkplay.svg'

export const LogoIcon = (props: IconProps) => {
  return <Icon as={LogoSvg} width="151px" height="39px" {...props} />
}
