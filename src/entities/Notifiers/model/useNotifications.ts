import { DateTime } from 'luxon'
import { useQuery } from 'react-query'
import { Guards } from 'shulga-app-core'

export interface Notification {
  id: number
  title: string
  desc: string
  date: string
}

const data: Notification[] = [
  {
    id: 0,
    title: 'Notification 0',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tenetur mollitia quas suscipit, et a voluptatibus libero magnam quam nemo nihil, cupiditate numquam expedita nam laborum veniam. Corrupti, aperiam nesciunt?',
    date: DateTime.now().minus({ hours: 1, minutes: 13 }).toISO(),
  },
  {
    id: 1,
    title: 'Notification 1',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tenetur mollitia quas suscipit, et a voluptatibus libero magnam quam nemo nihil, cupiditate numquam expedita nam laborum veniam. Corrupti, aperiam nesciunt?',
    date: DateTime.now().minus({ hours: 3, minutes: 34 }).toISO(),
  },
  {
    id: 2,
    title: 'Notification 2',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tenetur mollitia quas suscipit, et a voluptatibus libero magnam quam nemo nihil, cupiditate numquam expedita nam laborum veniam. Corrupti, aperiam nesciunt?',
    date: DateTime.now().minus({ days: 3, hours: 1, minutes: 18 }).toISO(),
  },
  {
    id: 3,
    title: 'Notification 3',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tenetur mollitia quas suscipit, et a voluptatibus libero magnam quam nemo nihil, cupiditate numquam expedita nam laborum veniam. Corrupti, aperiam nesciunt?',
    date: DateTime.now().minus({ days: 2, hours: 3, minutes: 58 }).toISO(),
  },
]

export const useNotifications = (userId: number | undefined) => {
  return useQuery(['notifications', userId], {
    queryFn: async () => {
      return new Promise<{ data: Notification[] }>((resolve) => {
        setTimeout(() => {
          resolve({ data })
        }, Math.ceil(Math.random()) * 1000)
      })
    },
    select: ({ data }) => data,
    keepPreviousData: true,
    enabled: Guards.isNumber(userId),
    placeholderData: { data: [] },
  })
}
