import { ProfileTemplate, Img, Email } from "./design";

export const Profile = ({ profile }) => {
  return (
    <ProfileTemplate>
      <Img src={profile.profileImageSource} alt="프로필 이미지" />
      <Email>{profile.email}</Email>
    </ProfileTemplate>
  );
};
