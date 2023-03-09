import { useQuery } from 'react-query'
import { Guards } from 'shulga-app-core'
import { Dropdown } from './types'

const data = [
  {
    id: 'games-free',
    group: '1',
    placeholder: 'Бесплатные',
  },
  {
    id: 'games-paid',
    group: '1',
    placeholder: 'Платные',
  },
  {
    id: 'games-simple',
    placeholder: 'Простые',
    group: '2',
    items: [
      {
        id: 'games-forGoyim',
        group: '1',
        placeholder: 'Для гоев',
      },
      {
        id: 'games-forNorms',
        group: '1',
        placeholder: 'Для нормисов',
      },
      {
        id: 'games-forShrek',
        group: '1',
        placeholder: 'Для шрек энджоеров',
      },
    ],
  },
  {
    id: 'games-novelties',
    group: '2',
    placeholder: 'Новинки',
  },
  {
    id: 'games-cloud',
    group: '2',
    placeholder: 'Облачные',
  },
  {
    id: 'games-market',
    group: '3',
    placeholder: 'Торговая площадка',
  },
]

export const useGamesDropdownData = (userId: number | undefined) => {
  return useQuery(['games-dropdowns', userId], {
    queryFn: async () => {
      return new Promise<{ data: Dropdown[] }>((resolve) => {
        setTimeout(() => {
          resolve({ data })
        }, Math.ceil(Math.random() * 1000))
      })
    },
    select: ({ data }) => data,
    keepPreviousData: true,
    enabled: Guards.isNumber(userId),
    placeholderData: { data },
  })
}
