import * as ProfileLayout from "./Profile.style";

export const Profile = ({ profile }) => {
  return (
    <ProfileLayout.Profile>
      <ProfileLayout.ProfileImage
        src={profile.profileImageSource}
        alt="프로필이미지"
      />
      <ProfileLayout.ProfileEmail>{profile.email}</ProfileLayout.ProfileEmail>
    </ProfileLayout.Profile>
  );
};
