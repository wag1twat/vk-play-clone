import { useNavigate } from 'react-router-dom'
import { DropdownItem } from 'src/features'

const useMediaDropdownData = (): DropdownItem[] => {
  const navigate = useNavigate()

  return [
    {
      id: 0,
      group: '1',
      label: 'Все материалы',
      action: () => navigate('#'),
    },
    {
      id: 1,
      group: '1',
      label: 'Новости игр',
      action: () => navigate('#'),
    },
    {
      id: 2,
      group: '1',
      label: 'Киберспорт',
      action: () => navigate('#'),
    },
    {
      id: 3,
      group: '2',
      label: 'Сообщество',
      action: () => navigate('#'),
    },
    {
      id: 4,
      group: '2',
      label: 'Игры Будущего',
      action: () => navigate('#'),
    },
  ]
}

export { useMediaDropdownData }
