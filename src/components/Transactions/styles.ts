import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { FlatList } from 'react-native'
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: ${RFPercentage(12)}px;
`

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-bottom: 16px;
`

export const TransactionList = styled.FlatList``