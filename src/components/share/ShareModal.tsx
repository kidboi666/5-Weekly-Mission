import { FOLDER_SHARED_BASE_URL } from '../../constant/api';
import { snsShare } from '../../constant/share';
import Button from '../common/atoms/Button';
import { ShareBox } from './shareStyle';

const handleLinkCopy = async (id:number) => {
  try {
    navigator.clipboard.writeText(`${FOLDER_SHARED_BASE_URL}/shared?user=${1}&folder=${id}`)
  } catch (e) {
    console.log(e)
  }
}

function ShareModal({sharedId}:{sharedId:number | null}) {
  const handlerSns = (snsId:string) => {
    if(sharedId && snsId === 'sh_link') {
      handleLinkCopy(sharedId);
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
