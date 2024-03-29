import Header from '../../components/Header';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import FolderInfo from '../../components/FolderInfo';

function Folder() {
  return (
    <>
      <Header />
      <FolderInfo />
      <main>
        <Input />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
      <Footer />
    </>
  );
}

export default Folder;
