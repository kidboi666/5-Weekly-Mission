import './App.css';
import GlobalStyles from './GlobalStyles';
import { LinkList } from './LinkList';
import { getLinkList } from './api';

const { links } = await getLinkList();

function App() {
  console.log(links);
  return (
    <div>
      <GlobalStyles />
      <LinkList links={links} />
    </div>  
  )
}

export default App; 
