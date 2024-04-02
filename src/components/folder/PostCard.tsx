import { IFolderListApi } from "../../constant/api";
import { DFlaxAlignCenterBtw, EllipsisLine } from "../../styles/commonStyle";
import { calculateTimeAgo } from "../../utils/calcTilmAgo";
import { CardWrap } from "./PostCardStyle";
const emptyImg = "/assets/logo/logo.svg";
export default function PostCard({
  image_url,
  description,
  created_at,
}: IFolderListApi) {
  return (
    <CardWrap to="" target="_blank">
      <figure>
        <div className="card__image">
          {image_url ? (
            <img src={image_url} alt={image_url} />
          ) : (
            <img className="empty" src={emptyImg} alt="" />
          )}
        </div>
        <figcaption className="card__info">
          <DFlaxAlignCenterBtw className="card__time-ago">
            {calculateTimeAgo(created_at ?? "")}
            <span className="card__btn-menu">
              <img src="/assets/icon/icon_dotte.svg" alt="메뉴" />
            </span>
          </DFlaxAlignCenterBtw>
          <EllipsisLine $tline={2} className="card__content">
            {description}
          </EllipsisLine>
          <p className="card__date">
            {new Date(`${created_at}`).toLocaleString()}
          </p>
        </figcaption>
      </figure>
    </CardWrap>
  );
}
