import { useState } from "react";
import "./LinkInput.css";
import { ModalLayout } from "../ModalLayout";

export function LinkInput({ folders }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="LinkInput-wrapper">
      <div className="LinkInput">
        <div className="input-icon-wrapper">
          <img src="./images/link.svg" alt="link img"></img>
          <input value="링크를 추가해보세요"></input>
        </div>
        <div className="add-url-button" onClick={toggleHandler}>
          추가하기
        </div>
      </div>
      {isOpen && (
        <ModalLayout toggleHandler={toggleHandler} title="폴더 추가">
          <ol className="folder-select-wrapper">
            {folders.map((item) => {
              return (
                <li className="folder-select">
                  {item.name}
                  <p>{item.link.count}</p>
                </li>
              );
            })}
          </ol>
          <div className="add button">추가하기</div>
        </ModalLayout>
      )}
    </div>
  );
}
