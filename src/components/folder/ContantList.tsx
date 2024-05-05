import PostCard from './PostCard';
import { EmptyBox, PostCardWrap } from '../../pages/folder/folderStyle';
import { IFolderContent } from '../../pages/folder/interface';

interface IFolderList {
  contant: IFolderContent[] | [] | undefined | null;
}

function ContantList({ contant }: IFolderList) {
  return (
    <div>
      {
        contant ? (
          <PostCardWrap>
            {contant?.map((data) => (
              <PostCard key={data.id} {...data} />
            ))}
          </PostCardWrap>
        ) : (
          <EmptyBox>저장된 링크가 없습니다.</EmptyBox>
        )
      }
    </div>
  );
}
export default ContantList;
