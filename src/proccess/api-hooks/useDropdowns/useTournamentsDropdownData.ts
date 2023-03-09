import { useQuery } from 'react-query'
import { Guards } from 'shulga-app-core'
import { Dropdown } from './types'

const data = [
  {
    id: 'tournaments-all',
    group: '1',
    placeholder: 'Все турниры',
  },
  {
    id: 'tournaments-partners',
    group: '1',
    placeholder: 'Напарники',
  },
  {
    id: 'tournaments-ratings',
    group: '1',
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
