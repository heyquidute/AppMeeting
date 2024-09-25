import styled from "styled-components/native";
import logoMeeting from "../../assets/images/logoMeeting.png"
import { css } from "styled-components";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const Logo = styled.Image.attrs( () => ({
  resizeMode: "contain",
  source: logoMeeting
}))`
  width: 163px;
  height: 159px;
`;

export const Title = styled.Text`
  ${ ({theme}) => css`
      font-size: 55px;
      font-family: ${theme.FONT_FAMILY.BOLD};
      color: ${theme.COLORS.LIGHT};
  `}
`;

export const ContentButton = styled.View`
  margin-top: 100px
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 20px 70px;
  margin: 15px;
  border-radius: 10px;
`; 

export const ButtonTitle = styled.Text`
  ${ ({theme}) => css`
      font-size: 18px;
      font-family: ${theme.FONT_FAMILY.BOLD};
      color: ${theme.COLORS.DARK_TEXT};
  `}
`;