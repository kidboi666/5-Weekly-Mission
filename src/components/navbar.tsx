import { Logo } from './logo'
import { UserIcon } from './user-icon'
import { UserName } from './user-name'

export const Navbar = () => {
  return (
    <nav className='bg-slate-100 flex h-20 fixed w-full z-10'>
      <div className='w-full flex items-center justify-between xl:w-[1200px] xl:mx-auto mx-10'>
        <Logo />
        <div className='flex items-center gap-x-2'>
          <UserIcon />
          <UserName />
        </div>
      </div>
    </nav>
  )
}
