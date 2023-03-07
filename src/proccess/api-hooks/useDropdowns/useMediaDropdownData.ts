import { useQuery } from 'react-query'
import { Guards } from 'shulga-app-core'
import { Dropdown } from './types'

const data = [
  {
    id: 0,
    group: '1',
    key: 'all',
    label: 'Все материалы',
  },
  {
    id: 1,
    group: '1',
    key: 'news',
    label: 'Новости игр',
  },
  {
    id: 2,
    group: '1',
    key: 'esports',
    label: 'Киберспорт',
  },
  {
    id: 3,
    group: '2',
    key: 'community',
    label: 'Сообщество',
  },
  {
    id: 4,
    group: '2',
    key: 'future',
    label: 'Игры Будущего',
  },
]

export const useMediaDropdownData = (userId: number | undefined) => {
  return useQuery(['media-dropdowns', userId], {
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
