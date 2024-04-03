import GlobalStyles from './GlobalStyles';
import { Header } from './Header';
import { LinkList } from './LinkList';
import { getLinkList, getUsers } from './api';

const { links } = await getLinkList();
const user = await getUsers();

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header user={user}/>
      <LinkList links={links} />
    </div>  
  )
}

export default App; 
