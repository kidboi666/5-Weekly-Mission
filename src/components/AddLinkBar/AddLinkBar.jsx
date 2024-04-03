import Button from '../Button/Button';
import linkIcon from '../../assets/images/link.svg';

const INPUT_PLACEHOLDER = '링크를 추가해 보세요';

export default function AddLinkBar() {
  return (
    <div>
      <div>
        <img src={linkIcon} alt="링크 추가하기" />
        <input placeholder={INPUT_PLACEHOLDER} />
      </div>
      <Button>추가하기</Button>
    </div>
  );
}
