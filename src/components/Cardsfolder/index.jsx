import { useFetch } from "../../utils/hooks/useFetch";
import { formatDate, generateTimeText } from "../../utils/hooks/date";
import thumbnail from "../../assets/thumbnail.svg";
import styles from "./index.module.css";
import starticon from "../../assets/staricon.svg";
import moreoptionicon from "../../assets/moreoptionicon.svg";
import { useState } from "react";

function Cardsfolder(props) {
  const CardData = useFetch(props.url);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className={styles.card_grid_container}>
      {CardData.data[0] ? (
        CardData.data.map((link) => (
          <a href={link.url}>
            <div key={link.id} className={styles.card}>
              <div className={styles.card_img_div} background-image>
                {link.imageSource ? (
                  <img
                    src={link.imageSource}
                    className={`${styles.card_img} ${
                      isHovering ? styles.zoomIn : ""
                    }`}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    alt={link.title}
                  />
                ) : (
                  <img
                    src={thumbnail}
                    className={`${styles.card_img} ${
                      isHovering ? styles.zoomIn : ""
                    }`}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    alt="thumbnail_img"
                  />
                )}
              </div>
              <div
                className={`${styles.card_txt_div} ${
                  isHovering ? styles.coloredText : ""
                }`}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <div className={styles.card_txt_div_top}>
                  <p className={styles.left_time_p}>
                    {generateTimeText(link.created_at)}
                  </p>
                  <button className={styles.card_moreoption_icon}>
                    <img
                      src={moreoptionicon}
                      alt="링크 게시물 옵션 버튼 아이콘 "
                    />
                  </button>
                </div>
                <div className={styles.card_txt_div_body}>
                  <p className={styles.card_txt_div_body}>{link.description}</p>
                </div>
                <div className={styles.card_txt_date}>
                  {formatDate(link.created_at)}
                </div>
              </div>
              <button className={styles.card_favorite_icon}>
                <img src={starticon} alt="즐겨찾기 별 아이콘" />
              </button>
            </div>
          </a>
        ))
      ) : (
        <div className={styles.noLinkText}>
          <p>저장된 링크가 없습니다</p>
        </div>
      )}
    </div>
  );
}

export default Cardsfolder;
