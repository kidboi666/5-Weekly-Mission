import styled from "styled-components"

const LoadingWrap = styled.div`
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,.7);
  z-index: 10;
  img {
    width: 150px;
  }
`

function Loading() {
  return <LoadingWrap>
    <img src="/assets/icon/icon_loading.svg" alt="loading" />
  </LoadingWrap>
}
export default Loading