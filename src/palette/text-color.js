import styled from "styled-components";

const TextColor = {
  gradient: {
    PurpleRed: styled.span`
      background-image: linear-gradient(90deg, #6d6afe, #ff9f9f);
      color: transparent;
      -webkit-background-clip: text;
    `,
    RedBlue: styled.span`
      background-image: linear-gradient(90deg, #fe8a8a, #a4ceff);
      color: transparent;
      -webkit-background-clip: text;
    `,
    YellowBlue: styled.span`
      background-image: linear-gradient(90deg, #ffd88b, #6fbaff);
      color: transparent;
      -webkit-background-clip: text;
    `,
    BlueWhite: styled.span`
      background-image: linear-gradient(
        90deg,
        #6d7ccd 20%,
        rgba(82, 136, 133, 0.22)
      );
      color: transparent;
      -webkit-background-clip: text;
    `,
    BlueRed: styled.span`
      background-image: linear-gradient(
        270deg,
        rgba(254, 87, 143, 0.3),
        rgba(104, 232, 249, 1)
      );
      color: transparent;
      -webkit-background-clip: text;
    `,
  },
};

export default TextColor;
