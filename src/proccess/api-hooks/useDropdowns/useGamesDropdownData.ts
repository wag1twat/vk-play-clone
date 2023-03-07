import { useQuery } from 'react-query'
import { Guards } from 'shulga-app-core'
import { Dropdown } from './types'


const data = [
  {
    id: 0,
    group: '1',
    key: 'free',
    label: 'Бесплатные',
  },
  {
    id: 1,
    group: '1',
    key: 'paid',
    label: 'Платные',
  },
  {
    id: 2,
    group: '2',
    key: 'simple',
    label: 'Простые',

    childrens: [
      {
        id: 3,
        group: '1',
        key: 'forGoyim',
        label: 'Для гоев',
      },
      {
        id: 4,
        group: '1',
        key: 'forNorms',
        label: 'Для нормисов',
      },
      {
        id: 5,
        group: '1',
        key: 'forShrek',
        label: 'Для шрек энджоеров',
      },
    ],
  },
  {
    id: 3,
    group: '2',
    key: 'novelties',
    label: 'Новинки',
  },
  {
    id: 4,
    group: '2',
    key: 'cloud',
    label: 'Облачные',
  },
  {
    id: 5,
    group: '3',
    key: 'market',
    label: 'Торговая площадка',
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
