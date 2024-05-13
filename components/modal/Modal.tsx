import { ModlaTitle } from "@/styles/commonStyle";
import CheckBox from "../common/atoms/CheckBox";
import Input from "../common/atoms/Input";
import ShareModal from "../share/ShareModal";
import { IModal } from "./interface";
import { ModalBody, ModalContainer, ModalDim, ModalFoot, ModalHead, ModalWrap } from "./modalStyle";
import Button from "../common/atoms/Button";

interface IModalInfo extends IModal {
  onOpen: boolean;
  onClose: () => void;
  $folderId?:number | null
}

function bodyContent(body: string, data: IModal['$modalData'], id :number|null = null) {
  if (body === 'input') {
    return <Input />;
  } else if (body === 'sns') {
    return <ShareModal sharedId={id} />;
  } else if (body === 'checkbox') {
    if (!data) return null;
    return <CheckBox $data={data} />;
  }
}

function Modal({
  onOpen,
  onClose,
  $folderId = null,
  $title,
  $titleDescText,
  $body,
  $buttonStyle,
  $buttonText,
  $modalData,
}: IModalInfo) {

  const modalClose = () => {
    onClose();
  };

  if (!onOpen) return null;
  return (
    <>
      <ModalWrap>
        <ModalDim onClick={modalClose}></ModalDim>
        <ModalContainer>
          <ModalHead>
            <ModlaTitle>{$title}</ModlaTitle>
            {$titleDescText && <div className="desc">{$titleDescText}</div>}
          </ModalHead>
          {$body && 
            <ModalBody>{bodyContent($body, $modalData, $folderId)}</ModalBody>
          }
          {$buttonStyle && (
            <ModalFoot>
              <Button $btnClass={$buttonStyle} onclick={() => modalClose()}>
                {$buttonText}
              </Button>
            </ModalFoot>
          )}
          <Button
            $btnClass={'button--modal-close'}
            onclick={() => modalClose()}
          >
            <img src="/assets/icon/icon_close.svg" alt="닫기" />
          </Button>
        </ModalContainer>
      </ModalWrap>
    </>
  );
}
export default Modal;
