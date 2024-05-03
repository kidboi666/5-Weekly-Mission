import { Skeleton } from '@/components/ui/skeleton'
import { UserIcon } from '@/components/user-icon'
import { useFolder } from '@/services/queries'

export const Hero = () => {
  const { folder, isLoading } = useFolder()

  if (isLoading)
    return (
      <section className='bg-slate-100 flex flex-col items-center py-10'>
        <div className='flex flex-col space-y-3'>
          <Skeleton className='h-14 w-14 rounded-full' />
          <div className='space-y-4'>
            <Skeleton className='h-4' />
            <Skeleton className='h-12' />
          </div>
        </div>
      </section>
    )

  return (
    <section className='bg-slate-100 flex flex-col items-center py-10'>
      <UserIcon className='h-14 w-14' />
      <p className='mt-2 text-sm text-gray-700'>@{folder?.owner.name}</p>
      <div className='mt-4 text-3xl font-bold'>{folder?.name}</div>
    </section>
  )
}
