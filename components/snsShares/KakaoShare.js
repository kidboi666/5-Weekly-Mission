// JsKey : 사용하려는 앱의 JavaScript 키
/* content {object} : {title: '제목', description: '설명, 내용', imageUrl: '보여줄 
이미지', link : {mobileWebUrl: '도메인' , webUrl : '도메인' }}*/
// btn [Array] : [{title: '버튼 이름', link : {mobileWebUrl: '도메인' , webUrl : '도메인' }}, ...]
//위의 도메인들은 등록한 것과 일치해야함(카카오 디벨롭퍼스 참조)

export const KakaoFeed = ({ JsKey, content, btn }) => {
  if (!window.Kakao.isInitialized()) window.Kakao.init(JsKey);

  window.Kakao.Share.sendDefault({
    objectType: "feed",
    content: content,
    buttons: btn,
  });
};
