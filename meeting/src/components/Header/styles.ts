import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex-direction:row;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.PRIMARY};
    padding: 30px 20px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.LIGHT};
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.MEDIUM};
`;