import { useRef, useState, useEffect } from "react";
import useFolderList from "../../hooks/useFolderList";
import AddFolderLink from "../AddFolderLinkBar/AddFolderLink";
import * as S from "./Header.styled";

const Header = ({ isFolderPage }) => {
  const { data: folderData, isLoading } = useFolderList();

  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <S.HeaderContainer ref={headerRef}>
      {isFolderPage ? (
        <AddFolderLink />
      ) : (
        <S.FolderInfoContainer>
          {folderData && (
            <S.FolderInfo>
              <S.ProfileImage
                src={folderData.folder.owner.profileImageSource}
                alt="폴더 소유자 프로필"
              />
              <S.OwnerName>{folderData.folder.owner.name}</S.OwnerName>
              <S.FolderName>{folderData.folder.name}</S.FolderName>
            </S.FolderInfo>
          )}
        </S.FolderInfoContainer>
      )}

      {isSticky && (
        <S.StickyContainer>
          {isFolderPage && <AddFolderLink />}
        </S.StickyContainer>
      )}
    </S.HeaderContainer>
  );
};

export default Header;
