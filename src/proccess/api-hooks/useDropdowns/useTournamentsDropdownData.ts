import React from 'react'
import { useQuery } from 'react-query'
import { DropdownItem } from 'src/features'

export const useTournamentsDropdownData = () => {
  const data = React.useMemo(
    () => [
      {
        id: 0,
        group: '1',
        label: 'Все турниры',
      },
      {
        id: 1,
        group: '1',
        label: 'Напарники',
      },
      {
        id: 2,
        group: '1',
        label: 'Рейтинги',
      },
    ],
    []
  )

  return useQuery(['tournaments-dropdowns'], {
    queryFn: async () => {
      return new Promise<{ data: DropdownItem[] }>((resolve) => {
        setTimeout(() => {
          resolve({ data })
        }, Math.ceil(Math.random() * 1000))
      })
    },
    select: ({ data }) => data,
    keepPreviousData: true,
  })
}
