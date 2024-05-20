import Image from "next/image";
import styles from "../ModalChildren.module.css";

interface SocialShareBoxProps {
  title: string;
}

function SocialShareBox({ title }: SocialShareBoxProps) {
  /*   const location = useLocation();
  const currentUrl =
    window.location.origin + location.pathname + location.search;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    currentUrl
  )}`;

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_KEY);
    }
  }, []);

  const handleCopyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      alert("클립보드에 복사되었습니다!");
    } catch (error) {
      console.error("클립보드 복사 실패:", error);
      alert("클립보드 복사에 실패했습니다.");
    }
  };

  const handleShareToKakao = (title: string) => {
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: title,
        description: "유용한 링크를 모은 폴더를 공유합니다.",
        imageUrl: defaultImg,
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  }; */

  return (
    <>
      <h1 className={styles.title}>폴더 공유</h1>
      <h2 className={styles.subTitle}>폴더명</h2>
      <div className={styles.shareBox}>
        <div className={styles.shareButtonWrapper}>
          <button
            className={styles.shareButton}
            // onClick={() => handleShareToKakao(title)}
          >
            <Image src="/images/kakaotalk.png" alt="kakaoBtn" />
          </button>
          <span>카카오톡</span>
        </div>
        <div className={styles.shareButtonWrapper}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <button className={styles.shareButton}>
              <Image src="/images/facebook.png" alt="facebookBtn" />
            </button>
          </a>
          <span>페이스북</span>
        </div>
        <div className={styles.shareButtonWrapper}>
          <button
            // onClick={handleCopyToClipBoard}
            className={styles.shareButton}
          >
            <Image src="/images/share.png" alt="shareBtn" />
          </button>
          <span>링크 복사</span>
        </div>
      </div>
    </>
  );
}

export default SocialShareBox;
