import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <main className='pt-20 h-[100vh] flex justify-center items-center'>
      <div className='flex gap-x-5'>
        <Link to='/folder'>
          <Button variant={'outline'}>folder page</Button>
        </Link>
        <Link to='/shared'>
          <Button variant={'outline'}>shared page</Button>
        </Link>
      </div>
    </main>
  )
}

export default HomePage
