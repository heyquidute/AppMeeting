import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
    width: 100%;
    padding: 16px 6px;
    background-color: ${({theme}) => theme.COLORS.LIGHT};
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    border-radius: 10px;
    margin: 8px 0px;
`;

export const TextError = styled.Text`
    
`;
