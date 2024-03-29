import { Link } from "react-router-dom";
import { NotFoundWrap } from "./NotFoundStyle";
import { TitleMs } from "../../styles/commonStyle";

export default function NotFoundPage() {
  return (
    <NotFoundWrap>
      <TitleMs>페이지 작업 중 입니다.</TitleMs>
      <div>
        <Link to="">홈으로</Link>
      </div>
    </NotFoundWrap>
  );
}
