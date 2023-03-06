import { useNavigate } from 'react-router-dom'
import { DropdownItem } from 'src/features'

export const useGamesDropdownData = (): DropdownItem[] => {
  const navigate = useNavigate()

  return [
    {
      id: 0,
      group: '1',
      label: 'Бесплатные',
      action: () => navigate('#'),
    },
    {
      id: 1,
      group: '1',
      label: 'Платные',
      action: () => navigate('#'),
    },
    {
      id: 2,
      group: '2',
      label: 'Простые',
      action: () => navigate('#'),
      childrens: [
        {
          id: 3,
          group: '1',
          label: 'Для гоев',
          action: () => console.log('Для гоев'),
        },
        {
          id: 4,
          group: '1',
          label: 'Для нормисов',
          action: () => console.log('Для нормисов'),
        },
        {
          id: 5,
          group: '1',
          label: 'Для шрек энджоеров',
          action: () => console.log('Для шрек энджоеров'),
        },
      ]
    },
    {
      id: 3,
      group: '2',
      label: 'Новинки',
      action: () => navigate('#'),
    },
    {
      id: 4,
      group: '2',
      label: 'Облачные',
      action: () => navigate('#'),
    },
    {
      id: 5,
      group: '3',
      label: 'Торговая площадка',
      action: () => navigate('#'),
    },
  ]
}