import { styled } from "styled-components";
import logo from "../assets/logo.svg";
import { useGetProfile } from "../hooks/useGetProfile";

export const GlobalNavbar = () => {
  const [user] = useGetProfile();

  return (
    <Container>
      <StyledLogo src={logo} alt="Logo" />
      <ProfileData>
        {user ? (
          <>
            <StyledProfileImage src={user?.data[0].image_source} />
            <StyledUserEmail>{user?.data[0].email}</StyledUserEmail>
          </>
        ) : (
          <LoginATag>로그인</LoginATag>
        )}
      </ProfileData>
    </Container>
  );
};

const Container = styled.div`
  padding: 33px 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 33px 32.5px;
  }
`;

const StyledLogo = styled.img`
  width: 133px;
  height: 24px;
`;

const ProfileData = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const StyledProfileImage = styled.img`
  width: 28px;
  height: 28px;
`;

const StyledUserEmail = styled.span`
  color: ${({ theme }) => theme.color.Gray6};
  font-size: 14px;
  font-weight: 400;

  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

const LoginATag = styled.a`
  padding: 16px 20px;
  border-radius: 8px;
  width: 128px;
  text-decoration: none;
  text-align: center;
  color: #f5f5f5;
  background: linear-gradient(
    91deg,
    ${({ theme }) => theme.color.GraPurpleblue} 0.12%,
    ${({ theme }) => theme.color.GraSkyblue} 101.84%
  );
`;
