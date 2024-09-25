import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 0px 24px;
`;

export const FormContainer = styled.View`
  padding-top: 20px;
`;

export const Title = styled.Text`
   ${({theme}) => css `
        color: ${theme.COLORS.DARK_TEXT};
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
    margin: 16px 0px
`;

export const ContentButton = styled.View`
  justify-content:center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 24px;
`; 

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.PRIMARY};
`;

export const ButtonTitle = styled.Text`
${({theme}) => css `
        color: ${theme.COLORS.LIGHT};
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`; 

export const ButtonImage = styled.TouchableOpacity`
  margin-bottom: 10px;
  width: 140px;
  height: 140px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.LIGHT};
`;

export const TextImage = styled.Text`
    padding: 55px 5px 5px;
    text-align: center;
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    border-radius: 10px;
`;


