import React from 'react'
import { useQuery } from 'react-query'
import { DropdownItem } from 'src/features'

export const useMediaDropdownData = () => {
  const data = React.useMemo(
    () => [
      {
        id: 0,
        group: '1',
        label: 'Все материалы',
      },
      {
        id: 1,
        group: '1',
        label: 'Новости игр',
      },
      {
        id: 2,
        group: '1',
        label: 'Киберспорт',
      },
      {
        id: 3,
        group: '2',
        label: 'Сообщество',
      },
      {
        id: 4,
        group: '2',
        label: 'Игры Будущего',
      },
    ],
    []
  )

  return useQuery(['media-dropdowns'], {
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
