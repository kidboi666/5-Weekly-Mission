import './Account.css';
import PropTypes from 'prop-types';
const STYLE_ACCOUNT_CLASS_NAME = 'account';
const STYLE_USER_PROFILE_IMG_CLASS_NAME = 'user-profile-img';
const STYLE_USER_EMAIL_CLASS_NAME = 'user-email';

const USER_PROFILE_IMG_ALT = 'User Profile';

export default function Account({ profileImgSource, userEmail }) {
  return (
    <div className={STYLE_ACCOUNT_CLASS_NAME}>
      <img
        src={profileImgSource}
        alt={USER_PROFILE_IMG_ALT}
        className={STYLE_USER_PROFILE_IMG_CLASS_NAME}
      />
      <span className={STYLE_USER_EMAIL_CLASS_NAME}>{userEmail}</span>
    </div>
  );
}

Account.propTypes = {
  profileImgSource: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
};
