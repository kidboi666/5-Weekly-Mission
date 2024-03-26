import profileImg from '../../assets/images/profile_img1.png';

export default function Profile() {
  return (
    <div>
      <div>
        <img src={profileImg} />
        <span>@코드잇</span>
      </div>

      <span>⭐️ 즐겨찾기</span>
    </div>
  );
}
