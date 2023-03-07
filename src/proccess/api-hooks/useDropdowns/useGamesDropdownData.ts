import { useQuery } from 'react-query'
import { Guards } from 'shulga-app-core'
import { Dropdown } from './types'

const data = [
  {
    id: 0,
    group: '1',
    label: 'Бесплатные',
  },
  {
    id: 1,
    group: '1',
    label: 'Платные',
  },
  {
    id: 2,
    group: '2',
    label: 'Простые',

    childrens: [
      {
        id: 3,
        group: '1',
        label: 'Для гоев',
      },
      {
        id: 4,
        group: '1',
        label: 'Для нормисов',
      },
      {
        id: 5,
        group: '1',
        label: 'Для шрек энджоеров',
      },
    ],
  },
  {
    id: 3,
    group: '2',
    label: 'Новинки',
  },
  {
    id: 4,
    group: '2',
    label: 'Облачные',
  },
  {
    id: 5,
    group: '3',
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
