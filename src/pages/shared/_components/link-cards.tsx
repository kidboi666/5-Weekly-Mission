import { useFolderLinks } from '@/services/queries'
import { LinkCard } from './link-card'
import { Skeleton } from '@/components/ui/skeleton'

export const LinkCards = () => {
  const { links, isLoading } = useFolderLinks()
  console.log(links)

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

  if (!links)
    return (
      <div className='text-2xl font-bold'>
        해당 유저의 폴더 링크가 존재하지 않습니다.
      </div>
    )

  return (
    <ul className='mt-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8'>
      {links.map((link) => (
        <LinkCard
          key={link.id}
          id={link.id}
          content={link.description}
          imgUrl={link.imageSource || ''}
          createdAt={link.createdAt}
        />
      ))}
    </ul>
  )
}
