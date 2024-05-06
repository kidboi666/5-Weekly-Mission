function useKakaoShare(folderName) {
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: folderName,
      description: `${folderName} 폴더 페이지입니다.`,
      //   imageUrl: ,
      link: {
        mobileWebUrl: 'https://linkbrary-oh.netlify.app',
        webUrl: 'https://linkbrary-oh.netlify.app/',
      },
    },
    buttons: [
      {
        title: '확인해보기',
        link: {
          mobileWebUrl: 'https://linkbrary-oh.netlify.app/',
          webUrl: 'https://developers.kakao.com',
        },
      },
    ],
  });
}
