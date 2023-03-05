import { Link, Text } from '@chakra-ui/react'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Dropdown } from 'src/features'
import { isRoute, routes } from 'src/proccess'
import { useGamesDropdownData } from '../model'

export const GamesDropdown = () => {
  const navigate = useNavigate()

  const location = useLocation()

  const data = useGamesDropdownData()
  return (
    <Link
      onClick={() => navigate(routes.games.path)}
      variant="underlining"
      data-active={isRoute('games', location)}
      position="relative"
    >
      <Text>Игры</Text>
      <Dropdown dropdowns={data} />
    </Link>
  )
}
