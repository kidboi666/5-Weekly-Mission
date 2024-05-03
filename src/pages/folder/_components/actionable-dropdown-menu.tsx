import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

import { Ellipsis } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type Props = {
  title: string
}

export const ActionableDropdownMenu = ({ title }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='outline-none '>
        <Ellipsis className='h-5 w-5 text-gray-500 hover:text-gray-800' />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={(event: React.MouseEvent) => event.preventDefault()}
          className='flex justify-center cursor-pointer'
        >
          <AlertDialog>
            <AlertDialogTrigger>폴더에 추가</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>폴더 추가</AlertDialogTitle>
                <AlertDialogDescription>
                  원하는 폴더를 추가해 보세요!
                </AlertDialogDescription>
                <Input placeholder='내용 입력' />
              </AlertDialogHeader>
              <AlertDialogFooter className='grid grid-cols-2'>
                <AlertDialogCancel>취소</AlertDialogCancel>
                <Button variant='primary'>추가하기</Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DropdownMenuItem>

        <DropdownMenuItem
          className='flex justify-center cursor-pointer'
          onClick={(event: React.MouseEvent) => event.preventDefault()}
        >
          <AlertDialog>
            <AlertDialogTrigger>삭제하기</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>폴더 삭제</AlertDialogTitle>
                <AlertDialogDescription>
                  정말로
                  <span className='font-bold text-indigo-500 mx-1'>
                    {title}
                  </span>
                  폴더를 삭제 하시겠습니까?
                </AlertDialogDescription>
                <AlertDialogDescription></AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className='grid grid-cols-2'>
                <AlertDialogCancel>취소</AlertDialogCancel>
                <Button variant='destructive'>삭제하기</Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
