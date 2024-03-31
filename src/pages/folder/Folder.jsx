import Header from '../../components/Header';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import FolderInfo from '../../components/FolderInfo';
import img_1 from '../../assets/image/image_1.png';
import img_2 from '../../assets/image/image_2.png';
import img_3 from '../../assets/image/image_3.png';
import img_4 from '../../assets/image/image_4.png';
import img_5 from '../../assets/image/image_5.png';
import img_6 from '../../assets/image/image_6.png';
import img_7 from '../../assets/image/image_7.png';
import img_8 from '../../assets/image/image_8.png';
import img_9 from '../../assets/image/image_9.png';
import styled from 'styled-components';

const imageIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const images = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9];

const MainContainer = styled.div``;
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1060px;
  margin: auto;

  @media screen and (max-width: 1023px) {
    width: auto;
    margin-left: 32px;
    margin-right: 32px;
  }

  @media screen and (max-width: 767px) {
    margin-right: 32px;
    margin-left: 32px;
  }
`;

const CardContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;
  justify-content: center;

  @media screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

function Folder() {
  return (
    <>
      <Header />
      <FolderInfo />
      <main>
        <MainContainer>
          <MainWrapper>
            <Input />
            <CardContainer>
              {imageIndex.map((card, idx) => (
                <Card src={images[idx]} key={idx} />
              ))}
            </CardContainer>
          </MainWrapper>
        </MainContainer>
        {/* <Card src={img_1} />
        <Card src={img_2} />
        <Card src={img_3} />
        <Card src={img_4} />
        <Card src={img_5} />
        <Card src={img_6} />
        <Card src={img_7} />
        <Card src={img_8} />
        <Card src={img_9} /> */}
      </main>
      <Footer />
    </>
  );
}

export default Folder;
