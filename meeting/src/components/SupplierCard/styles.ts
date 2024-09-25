import styled, { css } from "styled-components/native";

export const Container = styled.View`
    background-color: ${({theme}) => theme.COLORS.LIGHT};
    margin: 10px 0px;
    border-radius: 10px;
    padding: 12px;
`;

export const ContainerTop = styled.View`
    justify-content: left;
`;

export const ContainerBottom = styled.View`
    flex-direction: row;
    justify-content: space-between;
    height: 160px;
`;

export const ContainerLeft = styled.View``;

export const ContainerRight = styled.View``;

export const Name = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
    color: ${({theme}) => theme.COLORS.PRIMARY};
    margin-bottom: 15px;
`;

export const Text = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    color: ${({theme}) => theme.COLORS.DARK_TEXT};
    margin-bottom: 15px;
`;

export const CategoryTitle = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    color: #969CB2;
    margin-top: 15px;
`;

export const ImageSupplier = styled.Image`
    width: 130px;
    height: 130px;
    border-radius: 100px;
`;
