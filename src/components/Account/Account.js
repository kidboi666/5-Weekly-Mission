import './Account.css';

export default function Account({ profileImgSource, userEmail }) {
  return (
    <div className='account'>
      <img
        src={profileImgSource}
        alt='User Profile'
        className='user-profile-img'
      />
      <span className='user-email'>{userEmail}</span>
    </div>
  );
}
