import fetcher from '@/services/fetcher'
import { SWRConfig } from 'swr'

type Props = {
  children: React.ReactNode
}

export const SWRProvider = ({ children }: Props) => {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>
}
