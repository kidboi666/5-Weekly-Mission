import { SearchBar } from '@/components/search-bar'
import { Hero } from './_components/hero'
import { LinkCards } from './_components/link-cards'

export const SharedPage = () => {
  return (
    <main className='pt-20'>
      <Hero />
      <section className='py-10 xl:w-[1200px] xl:mx-auto mx-10 space-y-10'>
        <SearchBar />
        <LinkCards />
      </section>
    </main>
  )
}
