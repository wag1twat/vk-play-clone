import { useQuery } from 'react-query'
import { Guards } from 'shulga-app-core'
import { Dropdown } from './types'

const data = [
  {
    id: 0,
    group: '1',
    key: 'tournaments-all',
    placeholder: 'Все турниры',
  },
  {
    id: 1,
    group: '1',
    key: 'tournaments-partners',
    placeholder: 'Напарники',
  },
  {
    id: 2,
    group: '1',
    key: 'tournaments-ratings',
    placeholder: 'Рейтинги',
  },
]

export const useTournamentsDropdownData = (userId: number | undefined) => {
  return useQuery(['tournaments-dropdowns', userId], {
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
