import { calculatePastTime } from "util";
import { useState } from "react";
import { ModalLayout } from "../ModalLayout";

const base_image = "images/card-default.png";

export function LinkItem({ url, createdAt, imageSource, description, title }) {
  const [isOpen, setIsOpen] = useState({
    open: false,
    add: false,
    delete: false,
  });

  const toggleHandler = (state) => {
    setIsOpen((prev) => ({
      ...prev,
      [state]: !prev[state],
    }));
  };

  const linkImage = imageSource ?? base_image;
  return (
    <div className="linkItem-wrapper">
      <a href={url}>
        <div className="Link-card">
          <div className="Link-image-wrapper">
            <img className="Link-image" src={linkImage} alt="링크이미지" />
          </div>
          <div className="Link-info">
            <div className="kebab-wrapper">
              <p className="creation-time">{calculatePastTime(createdAt)}</p>
            </div>
            <p className="link-description">{description}</p>
            <p>2023. 3. 15</p>
          </div>
        </div>
      </a>
      <div className="kebab-button">
        <img
          src="images/kebab.svg"
          alt="kebab-button"
          onClick={() => toggleHandler("open")}
        />
        {isOpen.open && (
          <div className="popup-wrapper">
            <div
              className="popup-button"
              onClick={() => toggleHandler("delete")}
            >
              삭제하기
            </div>
            <div className="popup-button" onClick={() => toggleHandler("add")}>
              폴더에 추가
            </div>
          </div>
        )}
      </div>
      {isOpen.delete && (
        <ModalLayout
          title="링크삭제"
          description={title}
          toggleHandler={() => toggleHandler("delete")}
        >
          <div className="button delete">삭제하기</div>
        </ModalLayout>
      )}
      {isOpen.add && (
        <ModalLayout
          title="폴더에 추가"
          description={url}
          toggleHandler={() => toggleHandler("add")}
        >
          <div className="button">추가하기</div>
        </ModalLayout>
      )}
    </div>
  );
}
