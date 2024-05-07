import GlobalStyles from "../components/GlobalStyles";
import {
  Header,
  SearchBar,
  Footer,
  LinkInput,
  LinkList,
  Sorting,
  ErrorComponent,
  FolderTitle,
} from "components";
import { getData } from "../util/api";
import "../components/SharedPage.css";
import { useEffect, useState } from "react";
import { ApiUrl } from "../util/url";

const user = await getData(ApiUrl.sampleUser);
const Folders = await getData(ApiUrl.usersFolders);
const AllLinks = await getData(ApiUrl.usersLinks);

function FolderPage() {
  const [selectedId, setSelectedId] = useState();
  const [urlBySelectedId, setUrlBySelectedId] = useState("");
  const [name, setName] = useState("");
  const [links, setLinks] = useState(AllLinks.data);
  const [searchKeyWord, setSearchKeyWord] = useState();

  console.log(Folders);
  console.log(AllLinks);

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
    fetchData(); // eslint-disable-next-line
  }, [urlBySelectedId, selectedId]);

  return (
    <div>
      <GlobalStyles />
      <Header userEmail={user.email} />
      <LinkInput folders={Folders.data} />
      <div className="contents-wrapper">
        <SearchBar
          searchKeyWord={searchKeyWord}
          setSearchKeyWord={setSearchKeyWord}
        />
        <div className="links-wrapper">
          <Sorting
            folders={Folders.data}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            setUrl={setUrlBySelectedId}
            setName={setName}
            name={name}
          />
          <FolderTitle name={name} />
          {checkArrayBlank(links) ? (
            <ErrorComponent />
          ) : (
            <LinkList
              searchKeyWord={searchKeyWord}
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