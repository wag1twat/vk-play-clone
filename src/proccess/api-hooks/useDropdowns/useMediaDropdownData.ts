import { useQuery } from 'react-query'
import { Guards } from 'shulga-app-core'
import { Dropdown } from './types'

const data = [
  {
    id: 0,
    group: '1',
    key: 'media-all',
    placeholder: 'Все материалы',
  },
  {
    id: 1,
    group: '1',
    key: 'media-news',
    placeholder: 'Новости игр',
  },
  {
    id: 2,
    group: '1',
    key: 'media-esports',
    placeholder: 'Киберспорт',
  },
  {
    id: 3,
    group: '2',
    key: 'media-community',
    placeholder: 'Сообщество',
  },
  {
    id: 4,
    group: '2',
    key: 'media-future',
    placeholder: 'Игры Будущего',
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
