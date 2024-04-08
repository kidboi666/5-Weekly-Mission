import GlobalStyles from "../components/GlobalStyles"
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { Footer } from "../components/Footer";
import { getData } from "../components/api";
import '../components/SharedPage.css'
import { LinkInput } from "../components/LinkInput";
import { Sorting } from "../components/Sorting";
import { useEffect, useState } from "react";
import { ApiUrl } from "../components/url";
import { LinkList } from "../components/LinkList";
import { ErrorComponent } from "../components/ErrorComponent";

const user = await getData(ApiUrl.sampleUser);
const Folders = await getData(ApiUrl.usersFolders);
const AllLinks = await getData(ApiUrl.usersLinks);

function FolderPage() {
    const [selectedId, setSelectedId] = useState();
    const [urlBySelectedId, setUrlBySelectedId ] = useState('');
    const [links, setLinks] = useState(AllLinks.data);
    
    function checkArrayBlank(array) {
        return array ? array.length === 0 : true;
    }

    useEffect(() => {
        const newUrl = `${ApiUrl.usersLinks}?folderId=${selectedId}`;
        setUrlBySelectedId(newUrl);
    }, [selectedId]); // selectedId가 변경될 때만 실행되도록 설정

    useEffect(() => {
        async function fetchData() {
            if(selectedId){
                const newLinks = await getData(urlBySelectedId);
                setLinks(newLinks.data);
            }
            else setLinks(AllLinks.data);
        }
        fetchData();    
    },[urlBySelectedId,selectedId]);
    
    return (
        <div>
            <GlobalStyles />
            <Header user={user}/>
            <LinkInput />
            <div className='contents-wrapper'>
                <SearchBar />
                <div >
                    <Sorting Folders={Folders.data} selectedId={selectedId} setSelectedId={setSelectedId} setUrl={setUrlBySelectedId}/>
                    {checkArrayBlank(links) ? <ErrorComponent /> : <LinkList links={links} createdtime='created_at' image='image_source' />}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FolderPage;