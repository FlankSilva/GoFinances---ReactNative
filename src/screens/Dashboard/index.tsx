import React from 'react';
import { HeaderDashboard } from '@components/HeaderDashboard';
import { HighlightCards } from '@components/HighlightCards'
import { TransactionCardProps, Transactions } from '@components/Transactions'

import { Container } from './styles';

const dataCards = [
  {
    title: 'Entrada',
    amount: 17400.00,
    lastTransaction: 'Última entrada dia 13 de abril',
    icon: 'arrow-up-circle',
  },
  {
    title: 'Saídas',
    amount: 1259.00,
    lastTransaction: 'Última saída dia 03 de abril',
    icon: 'arrow-down-circle',
  },
  {
    title: 'Total',
    amount: 16141.00,
    lastTransaction: '01 à 16 de abril',
    icon: 'dollar-sign',
  },
]

const dataCardsTransaction: TransactionCardProps[] = [
  {
    title: 'Desenvolvimento de site',
    amount: 12000.00, 
    category: {
      icon: 'dollar-sign',
      name: 'Vendas'
    }, 
    date: '13/04/2020', 
  },
  {
    title: 'Hamburgueria Pizzy',
    amount: -59.00, 
    category: {
      icon: 'coffee',
      name: 'Alimentação'
    }, 
    date: '10/04/2020', 
  },
  {
    title: 'Aluguel do apartamento',
    amount: -1200.00, 
    category: {
      icon: 'shopping-bag',
      name: 'Casa'
    }, 
    date: '27/03/2020', 
  },
]

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <HeaderDashboard />
      <HighlightCards dataCards={dataCards} />
      <Transactions 
        title='Listagem' 
        data={dataCardsTransaction}
      />
    </Container>
  )
}