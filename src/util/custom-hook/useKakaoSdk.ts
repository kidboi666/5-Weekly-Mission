import { useEffectOnce } from "./useEffectOnce";

type ShareKakaoParams = {
  url: string;
  title: string;
  description: string;
  imageUrl: string;
};

declare const window: Window & {
  Kakao: {
    init: (key?: string) => void;
    isInitialized: () => boolean;
    Link: {
      sendDefault: (params: {
        objectType: "feed";
        content: {
          title: string;
          description: string;
          imageUrl: string;
          link: {
            mobileWebUrl: string;
            webUrl: string;
          };
        };
        buttons: {
          title: string;
          link: {
            mobileWebUrl: string;
            webUrl: string;
          };
        }[];
      }) => void;
    };
  };
};

/**
 * useKakaoSdk 훅은 Kakao SDK를 초기화하고, Kakao 링크 공유 기능을 제공하는 훅입니다.
 *
 * @returns {Object} 훅의 반환 객체입니다.
 * @returns {(params: ShareKakaoParams) => void} return.shareKakao - Kakao 링크를 공유하는 함수입니다.
 *
 * @example
 * const { shareKakao } = useKakaoSdk();
 * 
 * shareKakao({
 *   url: "https://example.com",
 *   title: "Example Title",
 *   description: "Example Description",
 *   imageUrl: "https://example.com/image.jpg"
 * });
 */
export const useKakaoSdk = () => {
  const shareKakao = ({ url, title, description, imageUrl }: ShareKakaoParams) => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_SDK_KEY);
      }

      kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: title,
          description: description,
          imageUrl: imageUrl,
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        buttons: [
          {
            title: title,
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
        ],
      });
    }
  };

  useEffectOnce(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  });

  return { shareKakao };
};
