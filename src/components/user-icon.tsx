import { useUser } from '@/services/queries'
import { Skeleton } from './ui/skeleton'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
}

export const UserIcon = ({ className }: Props) => {
  const { user, isLoading } = useUser()

  if (isLoading)
    return <Skeleton className={cn('rounded-full h-8 w-8', className)} />

  return (
    <div className={cn('rounded-full h-8 w-8', className)}>
      <img src={user?.image_source} alt='user-icon' />
    </div>
  )
}
