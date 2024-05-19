import styled from 'styled-components';

interface Props {
  imgUrl: {
    src: string;
  };
}

const SocialIcon = styled.button<Props>`
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  background-image: url(${(props) => props.imgUrl.src});
  background-size: cover;
  background-position: center;
  border: none;
  cursor: pointer;
`;

export default SocialIcon;
