import { snsShare } from '../../constant/share';
import Button from '../common/atoms/Button';
import { ShareBox } from './shareStyle';

const handleLinkCopy = async (id:number) => {
  try {
    navigator.clipboard.writeText(`${window.location.host}/shared/${id}`)
  } catch (e) {
    console.log(e)
  }
}

function ShareModal({sharedId}:{sharedId:number | null}) {
  const handlerSns = (snsId:string) => {
    if(sharedId && snsId === 'sh_link') {
      handleLinkCopy(sharedId);
      alert('주소를 복사하였습니다.');
    } else if (snsId === 'sh_kakao') {
      // 추후 작업 예정..
    } else if (snsId === 'sh_face') {
      // 추후 작업 예정..
    }
  }
  return (
    <ShareBox>
      {snsShare.map((sns) => (
        <Button key={sns.id} $btnClass={'button--sns-share'} onclick={() => handlerSns(sns.id)}>
          <img src={sns.src} alt={sns.name} />
          <span className="share--text">{sns.name}</span>
        </Button>
      ))}
    </ShareBox>
  );
}
export default ShareModal;
