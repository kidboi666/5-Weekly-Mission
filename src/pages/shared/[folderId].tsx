import { Search, Card, AppLayout, Owner, SharedLayout } from '@/src/components'
import { useState } from 'react'
import { Link, SharedFolder, UserData } from '@/src/types'
import { getSharedFolder } from '@/src/services/folder'
import { getSharedUserInfo } from '@/src/services/auth'
import { getLinkList } from '@/src/services/link'
import wrapper from '@/src/store'
import { useQuery } from '@tanstack/react-query'

interface SharedPageProps {
  sharedUserInfo: UserData
  sharedFolder: SharedFolder
  linkList: Link[]
}

export const getServerSideProps = async (context) => {
  const { folderId } = context.query

  await getSharedFolder(Number(folderId))
  await store.dispatch(getSharedUserInfo(folder?.payload[0]?.userId))
  await store.dispatch(getLinkList(Number(folderId)))
  const state = store.getState()

  return {
    props: {
      sharedUserInfo: state.auth.sharedUserInfo,
      sharedFolder: state.folder.sharedFolder,
      linkList: state.link.data,
    },
  }
})

const SharedPage = ({ sharedUserInfo, sharedFolder, linkList }: SharedPageProps) => {
  const [searchResult, setSearchResult] = useState<Link[] | string>([])
  const [searchKeyword, setSearchKeyword] = useState('')
  return (
    <AppLayout>
      <SharedLayout
        Owner={
          <Owner
            profileImage={sharedUserInfo.imageSource}
            userName={sharedUserInfo.name}
            folderName={sharedFolder.name}
          />
        }
        Search={
          <Search
            setSearchResult={setSearchResult}
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
          />
        }
        Card={
          searchResult.length >= 1 ? <Card linkList={searchResult} /> : <Card linkList={linkList} />
        }
      />
    </AppLayout>
  )
}

export default SharedPage
