import styled, { css } from "styled-components/native";
import { JustifyContentProps } from '../typesProps'

interface DirectionProps extends JustifyContentProps {
  distanceTop?: number;
  distanceBotton?: number;
}

export const Body = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Column = styled.View<DirectionProps>`
  flex-direction: column;
  justify-content: ${({ justifyContent }) => 
    justifyContent ? justifyContent : 'flex-start'};
  
  margin-top: ${({ distanceTop }) => distanceTop && distanceTop}px;
  margin-bottom: ${({ distanceBotton }) => distanceBotton && distanceBotton}px;
`

export const Row = styled.View<DirectionProps>`
  flex-direction: row;
  justify-content: ${({ justifyContent }) => 
    justifyContent ? justifyContent : 'flex-start'};
  
  margin-top: ${({ distanceTop }) => distanceTop && distanceTop}px;
  margin-bottom: ${({ distanceBotton }) => distanceBotton && distanceBotton}px;
`