import GlobalStyles from "../components/GlobalStyles"
import { Header } from "../components/Header";
import { FolderInfo } from "../components/FolderInfo";
import { SearchBar } from "../components/SearchBar";
import { LinkList } from "../components/LinkList";
import { Footer } from "../components/Footer";
import { getLinkList, getData } from "../components/api";
import { ApiUrl } from "../components/url";
import '../components/SharedPage.css'

const { links } = await getLinkList();
const user = await getData(ApiUrl.sampleUser);

function SharedPage() {
    return (
        <>
            <GlobalStyles />
            <Header user={user}/>
            <FolderInfo user={user}/>
            <div className='contents-box'>  
                <SearchBar />
                <LinkList links={links}/>  
            </div>
            <Footer />
        </>
    );
}

export default SharedPage;