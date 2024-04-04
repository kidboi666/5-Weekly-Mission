import styled from "styled-components";

const Foldermenu_Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
`;

const Foldermenu_Toolbar = styled.div`
  display: flex;
  gap: 10px;
`;

const Foldermenu_Toolbar_Button = styled.button`
  height: 35px;
  padding: 8px 12px 8px 12px;
  border-radius: 5px;
  border: 1px solid #6d6afe;
  background-color: #ffffff;
  flex-grow: 1;
  font-size: 16px;
  font-weight: 400;
`;

const Foldermenu_Toolbar_AddButton = styled.button`
  border: none;
  color: #6d6afe;
  background-color: #ffffff;
  font-size: 16px;
  font-weight: 500;
`;

const Foldermenu = () => {
  return (
    <Foldermenu_Container>
      <Foldermenu_Toolbar>
        <Foldermenu_Toolbar_Button>전체</Foldermenu_Toolbar_Button>
        <Foldermenu_Toolbar_Button>⭐ 즐겨찾기</Foldermenu_Toolbar_Button>
        <Foldermenu_Toolbar_Button>코딩 팁</Foldermenu_Toolbar_Button>
        <Foldermenu_Toolbar_Button>채용 사이트</Foldermenu_Toolbar_Button>
      </Foldermenu_Toolbar>
      <Foldermenu_Toolbar_AddButton>폴더 추가 +</Foldermenu_Toolbar_AddButton>
    </Foldermenu_Container>
  );
};

export default Foldermenu;
