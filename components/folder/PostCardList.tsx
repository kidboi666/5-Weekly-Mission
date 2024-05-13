import { memo } from 'react';
import { IFolderContent } from '@/pages/folder/interface';
import PostCard from './PostCard';
import { EmptyBox, PostCardWrap } from '@/pages/folder/folderStyle';


interface IFolderList {
  $content: IFolderContent[] | undefined | null;
}

function PostCardList({ $content }: IFolderList) {
  if(!$content) return <EmptyBox>저장된 링크가 없습니다.</EmptyBox>
  return (
    <PostCardWrap>
      {$content?.map((data) => (
        <PostCard key={data.id} {...data} />
      ))}
    </PostCardWrap>
  );
}
export default memo(PostCardList);
