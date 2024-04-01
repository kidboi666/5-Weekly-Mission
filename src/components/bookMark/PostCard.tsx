import { DFlaxAlignCenterBtw, EllipsisLine } from "../../styles/commonStyle";
import { CardWrap } from "./PostCardStyle";

export default function PostCard() {
  return (
    <CardWrap to="">
      <figure>
        <div className="card__image">
          <img src="/assets/bg/cat1.jpg" alt="이미지" />
        </div>
        <figcaption className="card__info">
          <DFlaxAlignCenterBtw className="card__time-ago">
            10 minutes ago
            <button type="button" className="card__btn-menu">
              <img src="/assets/icon/icon_dotte.svg" alt="메뉴" />
            </button>
          </DFlaxAlignCenterBtw>
          <EllipsisLine $tline={2} className="card__content">
            Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
            consequat. Tldkd
          </EllipsisLine>
          <p className="card__date">2023. 3. 15</p>
        </figcaption>
      </figure>
    </CardWrap>
  );
}
