import { useQuery } from 'react-query'
import { Guards } from 'shulga-app-core'
import { Dropdown } from './types'

const data = [
  {
    id: 0,
    group: '1',
    key: 'games-free',
    placeholder: 'Бесплатные',
  },
  {
    id: 1,
    group: '1',
    key: 'games-paid',
    placeholder: 'Платные',
  },
  {
    id: 2,
    group: '2',
    key: 'games-simple',
    placeholder: 'Простые',

    childrens: [
      {
        id: 3,
        group: '1',
        key: 'games-forGoyim',
        placeholder: 'Для гоев',
      },
      {
        id: 4,
        group: '1',
        key: 'games-forNorms',
        placeholder: 'Для нормисов',
      },
      {
        id: 5,
        group: '1',
        key: 'games-forShrek',
        placeholder: 'Для шрек энджоеров',
      },
    ],
  },
  {
    id: 3,
    group: '2',
    key: 'games-novelties',
    placeholder: 'Новинки',
  },
  {
    id: 4,
    group: '2',
    key: 'games-cloud',
    placeholder: 'Облачные',
  },
  {
    id: 5,
    group: '3',
    key: 'games-market',
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
