import React from 'react';

import { Container, Title, TransactionList } from './styles';
import { TransactionCard } from './TransactionCard';
import { View } from 'react-native';

interface Category {
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  title: string;
  amount: number;
  category: Category;
  date: string;
}

interface TransactionsProps {
  title: string;
  data: TransactionCardProps[]
}


export const Transactions: React.FC<TransactionsProps> = ({ 
  title,
  data
}) => {

  return (
    <Container>
      <Title>{title}</Title>

      <TransactionList 
        data={data}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ marginBottom: 16 }} />}
        contentContainerStyle={{ paddingBottom: 16 }}
        renderItem={({ item }: any) => {
          return (
            <TransactionCard
            {...{
              title: item.title,
              amount: item.amount,
              category: item.category,
              date: item.date,
            }}
          />
          )
        }  
      }
      />
    </Container>
  )
}
