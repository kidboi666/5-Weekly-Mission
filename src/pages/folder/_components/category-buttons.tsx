import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useCategories } from '@/services/queries'

export const CategoryButtons = () => {
  const { categories, isLoading } = useCategories()

  if (isLoading)
    return (
      <div className='flex flex-row flex-wrap gap-y-3 gap-x-3'>
        {Array.from({ length: 8 }, (_, index) => (
          <Skeleton key={index} className='h-10 w-20' />
        ))}
      </div>
    )

  return (
    <div className='flex flex-row flex-wrap gap-y-3 gap-x-3'>
      <Button
        variant='outline'
        className='border-indigo-500 bg-indigo-500 text-white hover:bg-indigo-500/80 hover:text-white'
      >
        전채
      </Button>
      {categories?.map((category) => (
        <Button
          key={category.id}
          variant='outline'
          className='border-indigo-500'
        >
          {category.name}
        </Button>
      ))}
    </div>
  )
}
