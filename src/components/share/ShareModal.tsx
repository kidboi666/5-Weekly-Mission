import { snsShare } from '../../constant/share';
import Button from '../common/atoms/Button';
import { ShareBox } from './shareStyle';

function ShareModal() {
  return (
    <ShareBox>
      {snsShare.map((sns) => (
        <Button key={sns.id} $btnClass={'button--sns-share'}>
          <img src={sns.src} alt={sns.name} />
          <span className="share--text">{sns.name}</span>
        </Button>
      ))}
    </ShareBox>
  );
}
export default ShareModal;
