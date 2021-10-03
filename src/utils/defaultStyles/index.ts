import styled from "styled-components/native";

export const Body = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Column = styled.View`
  flex-direction: column;
`

export const Row = styled.View`
  flex-direction: row;
`