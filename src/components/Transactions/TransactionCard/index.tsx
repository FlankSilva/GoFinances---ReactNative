import React from 'react';

import { formatedCurrency } from '@utils/StringFormatted'

import { 
  Amount,
  Category,
  CategoryName,
  Container, Date, Footer, Icon, Title,
} from './styles';

import { TransactionCardProps } from '../index'

 export const TransactionCard: React.FC<TransactionCardProps> = ({ 
  amount, 
  category, 
  date, 
  title
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Amount 
        type={amount >= 0 ? 'positive' : 'negative'}
      >
        {formatedCurrency(amount)}
      </Amount>

      <Footer>
        <Category>
          <Icon name={category.icon}/>
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{date}</Date>
      </Footer>
    </Container>
  )
}