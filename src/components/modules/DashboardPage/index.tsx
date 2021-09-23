import React from 'react';
import { Header } from './Header'
import { HighlightCards } from './HighlightCards';

import { 
  Container,
} from './styles';
import { Transactions } from './Transactions';

export const DashboardPage: React.FC = () => {
  return (
    <Container>
      <Header />
      <HighlightCards />
      <Transactions />
    </Container>
  )
}