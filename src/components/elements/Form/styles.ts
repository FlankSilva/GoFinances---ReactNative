import styled from "styled-components/native";
import { JustifyContentProps } from '../../../utils/typesProps'

type ContainerProps = JustifyContentProps;

export const Container = styled.View<ContainerProps>`
  flex: 1;
  width: 100%;
  padding: 24px;
  justify-content: ${({ justifyContent }) => 
    justifyContent ? justifyContent : 'flex-start'};
`