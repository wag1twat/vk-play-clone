import { useQuery } from 'react-query'

export interface UserProfile {
  id: number
}

export const useUserProfile = () => {
  return useQuery(['user-profile'], {
    queryFn: async () => {
      return new Promise<{ data: UserProfile }>((resolve) => {
        setTimeout(() => {
          resolve({ data: { id: 231555440 } })
        }, 1000)
      })
    },
    select: ({ data }) => data,
    keepPreviousData: true,
  })
}
