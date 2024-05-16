import { useEffect, useRef, useState } from "react";
import * as S from "../styles/folderPage.styled";
import Search from "../components/Search/Search";
import AddLink from "../components/AddLink/AddLink";
import Folder from "../components/Folder/Folder";
import Card from "../components/Card/Card";
import AppLayout from "@/components/App/AppLayout";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { useRouter } from "next/router";
import { getFolder } from "@/redux/actions/folder";
import { Link } from "@/services/types";
import { initializeSelectedFolder } from "@/redux/reducers/folder";
import { getAllLinkList } from "@/redux/actions/link";

const FolderPage = () => {
  const [isInterSecting, setInterSecting] = useState(false);
  const [linkStorage, setLinkStorage] = useState<Link[]>([]);
  const { userInfo, isLoggedIn } = useAppSelector((state) => state.auth);
  const { data, searchResult, noSearchResult } = useAppSelector((state) => state.link);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const targetRef = useRef<HTMLDivElement>();

  const callback = (entries: IntersectionObserverEntry[]) => {
    setTimeout(() => {
      setInterSecting(!entries[0].isIntersecting);
    }, 100);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    setLinkStorage(data);
  }, [data]);

  useEffect(() => {
    if (searchResult.length >= 1) {
      setLinkStorage(searchResult);
    }
  }, [searchResult]);

  useEffect(() => {
    if (!userInfo.id) return;
    dispatch(getFolder(userInfo.id));
    dispatch(getAllLinkList(userInfo.id));
    dispatch(initializeSelectedFolder());
  }, [userInfo]);

  return (
    <AppLayout>
      <S.FolderPageLayout>
        <S.HeaderSection ref={targetRef}>
          <AddLink />
        </S.HeaderSection>
        <S.SearchSection>
          <Search />
        </S.SearchSection>
        <S.FolderSection>
          <Folder />
        </S.FolderSection>
        <S.LinkSection>
          {noSearchResult ? (
            <div>{"검색 결과가 없습니다."}</div>
          ) : linkStorage?.length === 0 ? (
            <div>{"해당되는 링크가 없습니다."}</div>
          ) : (
            linkStorage?.map((v) => (
              <div key={v.id}>
                <Card link={v} />
              </div>
            ))
          )}
        </S.LinkSection>
      </S.FolderPageLayout>
      <S.FooterAddLink $animation={isInterSecting}>
        <AddLink />
      </S.FooterAddLink>
    </AppLayout>
  );
};

export default FolderPage;
