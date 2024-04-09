import { useEffect, useState } from 'react';
import { getFolderData } from '../api/api';
import styled from 'styled-components';

function Menu({ selectedItem, setSelectedItem }) {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFolderData();
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //     console.log({ selectedItem });
  // }, [selectedItem]);

  return (
    <MenuButtonContainer>
      <MenuButton isSelectButton={selectedItem === '전체'} onClick={() => setSelectedItem('전체')}>
        전체
      </MenuButton>
      {data &&
        data.data.map((item, index) => (
          <MenuButton
            key={index}
            isSelectButton={selectedItem === item.name}
            onClick={() => setSelectedItem(item.name)}
          >
            {item.name}
          </MenuButton>
        ))}
    </MenuButtonContainer>
  );
}

export default Menu;

const MenuButtonContainer = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
`;

const MenuButton = styled.button`
  display: flex;
  padding: 8px 12px;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #6d6afe;
  background: ${(props) => (props.isSelectButton ? '#6D6AFE' : '#ffffff')};
  cursor: pointer;
`;
