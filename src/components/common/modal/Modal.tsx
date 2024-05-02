import { ModlaTitle } from '../../../styles/commonStyle';
import ShareModal from '../../share/ShareModal';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import CheckBox from '../atoms/CheckBox';
import {
  ModalWrap,
  ModalContainer,
  ModalHead,
  ModalBody,
  ModalFoot,
  ModalDim,
} from './modalStyle';
import { IModal } from './interface';

function bodyContent(body: string, data: IModal['$modalData']) {
  if (body === 'input') {
    return <Input />;
  } else if (body === 'sns') {
    console.log(body, '여기');
    return <ShareModal />;
  } else if (body === 'checkbox') {
    if (!data) return null;
    return <CheckBox $data={data} />;
  }
}

interface IModalInfo extends IModal {
  onOpen: boolean;
  onClose: () => void;
}

function Modal({
  onOpen,
  onClose,
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
          {$body && <ModalBody>{bodyContent($body, $modalData)}</ModalBody>}
          {$buttonStyle && (
            <ModalFoot>
              <Button $btnClass={$buttonStyle} $clickEvent={() => modalClose()}>
                {$buttonText}
              </Button>
            </ModalFoot>
          )}
          <Button
            $btnClass={'button--modal-close'}
            $clickEvent={() => modalClose()}
          >
            <img src="/assets/icon/icon_close.svg" alt="닫기" />
          </Button>
        </ModalContainer>
      </ModalWrap>
    </>
  );
}
export default Modal;
