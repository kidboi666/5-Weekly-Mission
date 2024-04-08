import { Link } from "react-router-dom";
import { styled } from "styled-components";

const ViewHomePage = styled.div`
  background: var(--Linkbrary-bg);
  padding: 23.8rem 0rem 25.3rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  width: 100vw;
  height: 100vh;
`;

function Home() {
  return (
    <ViewHomePage>
      <Link to="/shared" className="btn-primary btn-sm">
        공유페이지
      </Link>
      <Link to="/folder" className="btn-primary btn-sm">
        폴더페이지
      </Link>
    </ViewHomePage>
  );
}

export default Home;
