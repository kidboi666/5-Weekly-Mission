export interface UserData {
  id: number
  created_at: string
  name: string
  image_source: string
  email: string
  auth_id: string
}

export interface Category {
  id: number
  created_at: string
  name: string
  user_id: number
  favorite: boolean
  link: {
    count: number
  }
}

export interface Link {
  created_at: string
  description: string | null
  folder_id: number | null
  id: number
  image_source: string | null
  title: string | null
  updated_at: string | null
  url: string
}

export interface FolderLink {
  id: number
  createdAt: string
  url: string
  title: string
  description: string
  imageSource?: string
}

export interface Folder {
  id: number
  name: string
  owner: Owner
  links: FolderLink[]
  count: number
}

interface Owner {
  id: number
  name: string
  profileImageSource: string
}
