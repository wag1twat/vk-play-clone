import { Link, LinkProps } from '@chakra-ui/react'
import { Link as RouteLink } from 'react-router-dom'
import { LogoIcon } from 'src/shared/Icon'

export const Logo = (props: LinkProps) => {
  return (
    <Link as={RouteLink} to="/" display={'flex'} alignItems="center" {...props}>
      <LogoIcon />
    </Link>
  )
}
