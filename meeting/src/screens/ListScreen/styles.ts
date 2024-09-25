import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 0px 24px;
`;

export const ContainerList = styled.View`
  flex: 1;
  width: 100%;
`;