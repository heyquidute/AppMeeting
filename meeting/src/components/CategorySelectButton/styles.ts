import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons"
import { css } from "styled-components";

export const Container = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    background-color: ${({theme}) => theme.COLORS.LIGHT};
    padding: 16px 6px;
    margin: 8px 0px;
    justify-content: space-between;
    border-radius: 10px;
`;

export const Icon = styled(Feather).attrs(({theme})=> ({
    name: "chevron-down",
    size: 24,
    color: theme.COLORS.DARK_TEXT
}))`
    margin-right: 4px;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.DARK_TEXT}
    `}
    margin-left: 8px;
`;
