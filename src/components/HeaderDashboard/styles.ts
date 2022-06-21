import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons'
import Constants from 'expo-constants'

const calcSpacingHeader = Constants.statusBarHeight + 28

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;

  background-color: ${({ theme }) => theme.colors.primary};
  /* margin-top */
`

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(calcSpacingHeader)}px;
`

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`