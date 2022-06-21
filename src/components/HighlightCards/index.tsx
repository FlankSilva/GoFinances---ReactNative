import React from 'react';
import { HighlightCard } from './HighlightCard';

import { Container } from './styles';

interface Data {
  title: string;
  amount: number;
  lastTransaction: string;
  icon: string;
}

interface HighlightCardsProps {
  dataCards: Data[];
}

export const HighlightCards: React.FC<HighlightCardsProps> = ({ dataCards }) => {
  return (
    <Container 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      paddingHorizontal: 24
    }}
    >
    {dataCards.map(item => (
      <HighlightCard 
        data={{
          dataHeader: { 
            title: item.title, 
            icon: item.icon,
          },
          dataFooter: {
            amount: item.amount,
            lastTransaction: item.lastTransaction
          }
        }}
      />
    ))}
    </Container>
  )
}
