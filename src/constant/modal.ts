import { IModal } from '../components/modal/interface';

interface IModalItem {
  [key: string]: IModal;
}

export const modalOrder: IModalItem = {
  folderChangeName: {
    $title: '폴더 이름 변경',
    $body: 'input',
    $buttonStyle: 'button--gradient large full',
    $buttonText: '변경하기',
  },

  folderAdd: {
    $title: '폴더 추가',
    $body: 'input',
    $buttonStyle: 'button--gradient large full',
    $buttonText: '추가하기',
  },

  folderShare: {
    $title: '폴더 공유',
    $titleDescText: '폴더명',
    $body: 'sns',
  },

  folderDelete: {
    $title: '폴더 삭제',
    $titleDescText: '폴더명',
    $buttonStyle: 'button--red large full',
    $buttonText: '삭제하기',
  },

  linkDelete: {
    $title: '링크 삭제',
    $titleDescText: 'httpw://www.abc.com',
    $buttonStyle: 'button--gradient large full',
    $buttonText: '삭제하기',
  },

  folderInAdd: {
    $title: '폴더에 추가',
    $titleDescText: '링크 주소',
    $body: 'checkbox',
    $buttonStyle: 'button--gradient large full',
    $buttonText: '추가하기',
  },
};
