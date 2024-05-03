import { formatDate, getTimeDifference } from '@/lib/utils'
import { ImageOff } from 'lucide-react'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  content: string
  imgUrl: string
  createdAt: string
}

export const LinkCard = ({ id, content, imgUrl, createdAt }: Props) => {
  const timeDifference = getTimeDifference(createdAt)
  const date = formatDate(createdAt)
  return (
    <Link to={`/links/${id}`}>
      <article className='group transition flex flex-col rounded-xl shadow-lg cursor-pointer'>
        {imgUrl ? (
          <div className='overflow-hidden aspect-video rounded-t-xl flex items-center justify-center'>
            <img
              src={imgUrl}
              className='w-full h-full object-cover object-center group-hover:scale-125 transition duration-300 '
            />
          </div>
        ) : (
          <div className='aspect-video rounded-t-xl flex justify-center items-center bg-gray-100'>
            <ImageOff className='h-16 w-16 text-gray-700' />
          </div>
        )}
        <div className='p-5 space-y-3'>
          <div className='text-sm text-muted-foreground'>{timeDifference}</div>
          <p className='line-clamp-2 font-semibold min-h-[3rem]'>{content}</p>
          <div className='text-sm'>{date}</div>
        </div>
      </article>
    </Link>
  )
}
