import React from 'react';

import { Body } from '../../../utils/defaultStyles'
import { Header } from './Header'
import { HighlightCards } from './HighlightCards';
import { Transactions } from './Transactions';



export const DashboardPage: React.FC = () => {
  return (
    <Body>
      <Header />
      <HighlightCards />
      <Transactions />
    </Body>
  )
}