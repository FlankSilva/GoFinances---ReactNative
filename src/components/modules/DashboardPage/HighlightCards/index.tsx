import React from 'react';
import { HighlightCard } from '../../../elements/HighlightCard';

import { Container } from './styles';

export const HighlightCards: React.FC = () => {
  return (
    <Container>
      <HighlightCard
        title="Entradas"
        amount="R$ 17,400,00"
        lastTransaction="Última entrada dia 13 de abril"
        type="up"
      />
      <HighlightCard 
        title="Saídas"
        amount="R$ 1.259,00"
        lastTransaction="Última saída dia 03 de abril"
        type="down"
      />
      <HighlightCard 
        title="Total"
        amount="R$ 16,141,00"
        lastTransaction="01 à 16 de abril"
        type="total"
      />
    </Container>
  )
}