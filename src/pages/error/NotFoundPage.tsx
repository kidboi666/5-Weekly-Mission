import { Link } from "react-router-dom";
import { TitleMs } from "../../styles/commonStyle";
import { NotFoundWrap } from "./notFoundStyle";

export default function NotFoundPage() {
  return (
    <NotFoundWrap>
      <TitleMs>페이지 작업 중 입니다.</TitleMs>
      <div>
        <Link to="/folder">폴더 페이지로</Link>
      </div>
    </NotFoundWrap>
  );
}
