import { Category, Folder, Link, UserData } from '@/types'
import useSWR from 'swr'

export const useUser = () => {
  const { data, isLoading } = useSWR<{ data: UserData[] }>('/users/1')

  return { user: data?.data[0], isLoading }
}

export const useCategories = () => {
  const { data, isLoading } = useSWR<{ data: Category[] }>('/users/1/folders')

  return { categories: data?.data, isLoading }
}

export const useLinks = () => {
  const { data, isLoading } = useSWR<{ data: Link[] }>('/users/1/links')

  return { links: data?.data, isLoading }
}

export const useFolder = () => {
  const { data, isLoading } = useSWR<{ folder: Folder }>('/sample/folder')

  return { folder: data?.folder, isLoading }
}

export const useFolderLinks = () => {
  const { data, isLoading } = useSWR<{ folder: Folder }>('/sample/folder')

  return { links: data?.folder.links, isLoading }
}
