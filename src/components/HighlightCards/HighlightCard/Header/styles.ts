import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
  type: string
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme, type }) => 
    type === 'Total' ? theme.colors.shape : theme.colors.text_dark
  };
`

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;

  ${({ type }) => type === 'Entrada' && css`
    color: ${({ theme }) => theme.colors.success};
  `};

  ${({ type }) => type === 'Saídas' && css`
    color: ${({ theme }) => theme.colors.attention};
  `};

  ${({ type }) => type === 'Total' && css`
    color: ${({ theme }) => theme.colors.shape};
  `};
  
`