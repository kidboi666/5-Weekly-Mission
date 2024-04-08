import useFetchData from "../../hooks/useFetchData";
import styled from "styled-components";
import Card from "./Card";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-top: 20px;

  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 1124px;
  }

  @media (max-width: 769px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Cards = () => {
  const folderData = useFetchData(
    `${import.meta.env.VITE_BASE_URL}/sample/folder`
  );

  if (!folderData) return null;

  return (
    <CardContainer>
      {folderData.folder.links.map((link) => (
        <Card key={link.id} link={link} />
      ))}
    </CardContainer>
  );
};

export default Cards;
