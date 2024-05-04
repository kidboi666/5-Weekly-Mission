import GlobalStyles from "../components/GlobalStyles";
import { Header } from "../components/Header/Header";
import { FolderInfo } from "../components/FolderInfo/FolderInfo";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { LinkList } from "../components/LinkList/LinkList";
import { Footer } from "../components/Footer/Footer";
import { getLinkList, getData } from "../util/api";
import { ApiUrl } from "../util/url";
import "../components/SharedPage.css";

const { links } = await getLinkList();
const user = await getData(ApiUrl.sampleUser);

function SharedPage() {
  return (
    <>
      <GlobalStyles />
      <Header user={user} />
      <FolderInfo user={user} />
      <div className="contents-box">
        <SearchBar />
        <LinkList links={links} />
      </div>
      <Footer />
    </>
  );
}

export default SharedPage;
