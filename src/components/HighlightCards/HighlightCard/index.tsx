import React from 'react';

import { Header } from './Header'
import { Footer } from './Footer'

import { Container } from './styles';

export interface DataHeader {
  title: string;
  icon: string;
}

export interface DataFooter {
  amount: number | string;
  lastTransaction: string;
  type?: string;
}

interface PropsHighlightCard {
  dataHeader: DataHeader;
  dataFooter: DataFooter;
}

interface Props {
  data: PropsHighlightCard;
}

export const HighlightCard: React.FC<Props> = ({ data }) => {
  const { dataFooter, dataHeader } = data

  return (
    <Container type={dataHeader.title}>
      <Header
        title={dataHeader.title} 
        icon={dataHeader.icon}
      />
      <Footer
        amount={dataFooter.amount}  
        lastTransaction={dataFooter.lastTransaction}
        type={dataHeader.title}
      />
    </Container>
  )
}