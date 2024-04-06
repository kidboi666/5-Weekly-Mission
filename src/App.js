import './app.css';
import { FolderInfo } from './FolderInfo';
import { Footer } from './Footer';
import GlobalStyles from './GlobalStyles';
import { Header } from './Header';
import { LinkList } from './LinkList';
import { SearchBar } from './SearchBar';
import { getLinkList, getUsers } from './api';

const { links } = await getLinkList();
const user = await getUsers();

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header user={user}/>
      <FolderInfo user={user}/>
      <div className='contents-box'>  
        <SearchBar />
        <LinkList links={links}/>  
      </div>
      <Footer />
    </div>  
  )
}

export default App; 
