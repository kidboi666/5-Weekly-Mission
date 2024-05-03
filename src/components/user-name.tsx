import { useUser } from '@/services/queries'
import { Skeleton } from './ui/skeleton'

export const UserName = () => {
  const { user, isLoading } = useUser()

  if (isLoading) return <Skeleton className='h-6 w-32' />

  return <div className='sm:block hidden'>{user?.email}</div>
}
