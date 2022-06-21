import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface TypeProps {
  type?: string
}

export const Container = styled.View``

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;

  color: ${({ theme, type }) => 
    type === 'Total' ? theme.colors.shape : theme.colors.text_dark
  };
  margin-top: 38px;
`

export const LastTransaction = styled.Text<TypeProps>`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme, type }) => 
    type === 'Total' ? theme.colors.shape : theme.colors.text
  };
`