import { Button } from '@/components/ui/button'
import { ScreenShareOff } from 'lucide-react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <main className='h-[100vh] flex justify-center items-center'>
      <ScreenShareOff className='h-32 w-32 text-gray-500' />
      <div className='ml-10 space-y-5'>
        <h1 className='text-5xl font-extrabold'>
          4<span className='text-emerald-500'>O</span>4 ERROR
        </h1>
        <h2 className='text-2xl text-red-500'>페이지를 찾을수 없습니다!</h2>
        <p>페이지가 존재하지 않거나 사용할 수 없는 페이지 입니다.</p>
        <Button className='w-full bg-sky-50' variant='outline' asChild>
          <Link to='/'>홈페이지로 돌아가기</Link>
        </Button>
      </div>
    </main>
  )
}

export default ErrorPage
