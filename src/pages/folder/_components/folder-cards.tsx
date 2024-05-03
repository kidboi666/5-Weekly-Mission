import { useLinks } from '@/services/queries'
import { FolderCard } from './folder-card'
import { Skeleton } from '@/components/ui/skeleton'

export const FolderCards = () => {
  const { links: folders, isLoading } = useLinks()

  if (isLoading)
    return (
      <ul className='mt-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8'>
        {Array.from({ length: 6 }).map((_, index) => (
          <li key={index} className='flex flex-col space-y-3'>
            <Skeleton className='aspect-video' />
            <div className='space-y-4'>
              <Skeleton className='h-6' />
              <Skeleton className='h-6' />
              <Skeleton className='h-6' />
            </div>
          </li>
        ))}
      </ul>
    )

  if (!folders)
    return (
      <div className='flex justify-center font-bold my-20'>
        <h2 className='text-2xl'>아직 글이 업로드 되지않았습니다.</h2>
      </div>
    )

  return (
    <ul className='mt-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8'>
      {folders.map((folder) => (
        <FolderCard
          key={folder.id}
          id={folder.id}
          title={folder.title || ''}
          imgUrl={folder.image_source}
          createdAt={folder.created_at}
          content={folder.description || ''}
        />
      ))}
    </ul>
  )
}
