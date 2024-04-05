import styled from "styled-components";

function NoLink() {
  return <NoLinkLayout>저장된 링크가 없습니다.</NoLinkLayout>;
}

const NoLinkLayout = styled.div`
  display: flex;
  width: 1060px;
  height: 100px;
  padding: 41px 0px 35px 0px;
  justify-content: center;
  align-items: center;
`;

export default NoLink;
