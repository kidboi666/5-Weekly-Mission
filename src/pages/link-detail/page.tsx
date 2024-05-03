import { useParams } from 'react-router-dom'

const LinkDetailPage = () => {
  const params = useParams<{ linkId: string }>()

  return (
    <div className='pt-20 h-[100vh] flex justify-center items-center'>
      <h1 className='text-5xl font-bold'>
        link id: <span className='text-red-500'>{params.linkId}</span>
      </h1>
    </div>
  )
}

export default LinkDetailPage
