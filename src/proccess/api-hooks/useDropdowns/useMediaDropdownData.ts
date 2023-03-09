import { useQuery } from 'react-query'
import { Guards } from 'shulga-app-core'
import { Dropdown } from './types'

const data = [
  {
    id: 'media-all',
    group: '1',
    placeholder: 'Все материалы',
  },
  {
    id: 'media-news',
    group: '1',
    placeholder: 'Новости игр',
  },
  {
    id: 'media-esports',
    group: '1',
    placeholder: 'Киберспорт',
  },
  {
    id: 'media-community',
    group: '2',
    placeholder: 'Сообщество',
  },
  {
    id: 'media-future',
    group: '2',
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
