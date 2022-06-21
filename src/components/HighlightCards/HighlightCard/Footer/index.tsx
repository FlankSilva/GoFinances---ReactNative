import React from 'react';

import { DataFooter } from '../index'
import { formatedCurrency } from '@utils/StringFormatted'

import { Container, Amount, LastTransaction } from './styles';

export const Footer: React.FC<DataFooter> = ({ amount, lastTransaction, type }) => {
  return(
    <Container>
      <Amount type={type}>{formatedCurrency(amount)}</Amount>
      <LastTransaction type={type}>
        {lastTransaction}
      </LastTransaction>
    </Container>
  )
}
