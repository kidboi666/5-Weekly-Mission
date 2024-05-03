import { SearchBar } from '@/components/search-bar'
import { Hero } from './_components/hero'
import { CategoryButtons } from './_components/category-buttons'
import { ControlButtons } from './_components/control-buttons'
import { AddFolderButton } from './_components/add-folder-button'
import { FolderCards } from './_components/folder-cards'

export const FolderPage = () => {
  return (
    <main className='pt-20'>
      <Hero />
      <section className='py-10 xl:w-[1200px] xl:mx-auto mx-10'>
        <SearchBar />
        <div className='mt-10 flex justify-between'>
          <CategoryButtons />
          <AddFolderButton />
        </div>
        <div className='mt-5 flex justify-between'>
          <h2 className='text-xl font-bold'>유용한 글</h2>
          <ControlButtons />
        </div>
        <FolderCards />
      </section>
    </main>
  )
}
