import { useNavigate } from 'react-router-dom'
import { DropdownItem } from 'src/features'

export const useTournamentsDropdownData = (): DropdownItem[] => {
  const navigate = useNavigate()

  return [
    {
      id: 0,
      group: '1',
      label: 'Все турниры',
      action: () => navigate('#'),
    },
    {
      id: 1,
      group: '1',
      label: 'Напарники',
      action: () => navigate('#'),
    },
    {
      id: 2,
      group: '1',
      label: 'Рейтинги',
      action: () => navigate('#'),
    },
  ]
}