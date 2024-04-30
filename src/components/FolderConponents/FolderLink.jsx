import {
  FolderContainer,
  Sort,
  FolderGrid,
  FolderImage,
  FolderContent,
  FolderContentText,
  ATag,
} from './Folderstyles/FolderListStyled.jsx';
import { timeAgo } from '../utils/CardUtil.jsx';
import useFetch from '../hooks/useFetch.jsx';
import defaultImage from '../../assets/defaultImage.svg';

function FolderList() {
  const { data, isLoading, error } = useFetch('api/sample/folder');

  if (isLoading) {
    return <div></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Sort>
      <FolderGrid>
        {data.folder.links.map((link, i) => (
          <FolderContainer key={`Folder-index-${i}`}>
            <ATag href={link.url}>
              <FolderImage style={{ backgroundImage: `url(${link?.imageSource || defaultImage})` }} />
            </ATag>
            <FolderContent>
              <FolderContentText size={13} color="gray60" className="Folder__createdAt">
                {timeAgo(link.createdAt)}
              </FolderContentText>
              <FolderContentText size={16} color="black" className="Folder__description">
                {link.description}
              </FolderContentText>
              <FolderContentText size={14} color="gray100" className="Folder__writingTime">
                {link.createdAt.slice(0, 10)}
              </FolderContentText>
            </FolderContent>
          </FolderContainer>
        ))}
      </FolderGrid>
    </Sort>
  );
}
export default FolderList;
