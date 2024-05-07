export default function shareKakao(e, folderName, folderId) {
  const url = 'https://linkbrary-oh.netlify.app/';
  const folderUrl = `${url}/${folderId}`;

  const { Kakao } = window;

  Kakao.cleanup();
  Kakao.init('d433130307621ad24713cbacf6a9f93b');

  const shareKakao = (e) => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: folderName,
        description: `${folderName} 폴더 페이지입니다.`,
        //   imageUrl: ,
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: '확인해보기',
          link: {
            mobileWebUrl: folderUrl,
            webUrl: folderUrl,
          },
        },
      ],
    });
  };

  shareKakao(e);
}
