import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface TypeProps {
  type: string
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, type }) => 
    type === 'Total' ? theme.colors.secondary : theme.colors.shape
  };

  width: ${RFValue(300)}px;
  border-radius: 5px;

  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;

  margin-right: 16px;
`