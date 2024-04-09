import SubHeader from '../components/SubHeader';
import AddLink from '../components/AddLink';
import Folder from '../components/FolderPage/Folder';
import App from '../components/App';

function FolderPage() {
  return (
    <App headerFixed={false}>
      <SubHeader headerfixed={false}>
        <AddLink />
      </SubHeader>
      <Folder />
    </App>
  );
}

export default FolderPage;
