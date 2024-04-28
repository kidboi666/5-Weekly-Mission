import GlobalStyles from "../components/GlobalStyles";
import { Header } from "../components/Header/Header";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { Footer } from "../components/Footer/Footer";
import { getData } from "../util/api";
import "../components/SharedPage.css";
import { LinkInput } from "../components/LinkInput/LinkInput";
import { Sorting } from "../components/Sorting/Sorting";
import { useEffect, useState } from "react";
import { ApiUrl } from "../util/url";
import { LinkList } from "../components/LinkList/LinkList";
import { ErrorComponent } from "../components/ErrorComponent/ErrorComponent";

const user = await getData(ApiUrl.sampleUser);
const Folders = await getData(ApiUrl.usersFolders);
const AllLinks = await getData(ApiUrl.usersLinks);

function FolderPage() {
  const [selectedId, setSelectedId] = useState();
  const [urlBySelectedId, setUrlBySelectedId] = useState("");
  const [links, setLinks] = useState(AllLinks.data);

  function checkArrayBlank(array) {
    return array ? array.length === 0 : true;
  }

  async function fetchData() {
    if (selectedId) {
      const newLinks = await getData(urlBySelectedId);
      setLinks(newLinks.data);
    } else setLinks(AllLinks.data);
  }

  useEffect(() => {
    const newUrl = `${ApiUrl.usersLinks}?folderId=${selectedId}`;
    setUrlBySelectedId(newUrl);
  }, [selectedId]);

  useEffect(() => {
    fetchData();
  }, [urlBySelectedId, selectedId]);

  return (
    <div>
      <GlobalStyles />
      <Header user={user} />
      <LinkInput />
      <div className="contents-wrapper">
        <SearchBar />
        <div>
          <Sorting
            folders={Folders.data}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            setUrl={setUrlBySelectedId}
          />
          {checkArrayBlank(links) ? (
            <ErrorComponent />
          ) : (
            <LinkList
              links={links}
              createdtime="created_at"
              image="image_source"
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FolderPage;
