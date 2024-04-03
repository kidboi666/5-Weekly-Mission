import Button from '../Button/Button';
import linkIcon from '../../assets/images/link.svg';
import './AddLinkBar.css';

const STYLE_ADD_LINK_BAR = 'add-link-bar';
const STYLE_INPUT_BOX = 'input-box';
const STYLE_LINK_ICON = 'link-icon';
const STYLE_LINK_INPUT = 'link-input';

const INPUT_PLACEHOLDER = '링크를 추가해 보세요';

export default function AddLinkBar() {
  return (
    <div className={STYLE_ADD_LINK_BAR}>
      <div className={STYLE_INPUT_BOX}>
        <img className={STYLE_LINK_ICON} src={linkIcon} alt="링크 추가하기" />
        <input className={STYLE_LINK_INPUT} placeholder={INPUT_PLACEHOLDER} />
      </div>
      <Button>추가하기</Button>
    </div>
  );
}
