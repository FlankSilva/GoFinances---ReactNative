import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { TransactionCard, TransactionCardProps } from '../../../elements/TransactionCard'

import { Container, Title, TransactionList } from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string
}

export const Transactions: React.FC = () => {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      amount: "R$ 12.000,00",
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date: "13/04/2020",
      title: "Desenvolvimento do site"
    },
    {
      id: '2',
      type: 'negative',
      amount: "R$ 59,00",
      category: {
        name: 'Vendas',
        icon: 'coffee'
      },
      date: "13/04/2020",
      title: "Hamburgueria Pizzay"
    },
    {
      id: '3',
      type: 'negative',
      amount: "R$ 1.200,00",
      category: {
        name: 'Vendas',
        icon: 'shopping-bag'
      },
      date: "13/04/2020",
      title: "Aluguel do Apartamento"
    }
  ]

  return (
    <Container>
      <Title>Listagem</Title>
      <TransactionList 
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <TransactionCard key={index} data={item}/>
        )}
      />
    </Container>
  )
}
