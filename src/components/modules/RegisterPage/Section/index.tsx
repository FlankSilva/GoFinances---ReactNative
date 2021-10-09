import React from 'react';
import { Row } from '../../../../utils/defaultStyles';
import { Button, CategorySelectButton, Fields, Form, Input, TransactionTypeButton } from '../../../elements/Form';

interface CategoryProps {
  key: 'category',
  name: 'Categoria'
}

interface Props {
  category: string;
  transactionType: string;
  handleTransactionTypeSelect: (type: 'up' | 'down') => void
  handleOpenOrCloseModal: () => void
}

export const Section: React.FC<Props> = ({
  transactionType,
  category,
  handleTransactionTypeSelect,
  handleOpenOrCloseModal
}) => {
  return (
    <Form justifyContent="space-between">
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          
          <Row
            justifyContent="space-between"
            distanceTop={8}
            distanceBotton={16}
          >
            <TransactionTypeButton
              title="Income" 
              type="up"
              onPress={() => handleTransactionTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton 
              title="Outcome" 
              type="down"
              onPress={() => handleTransactionTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </Row>
          <CategorySelectButton
            title={category}
            onPress={handleOpenOrCloseModal}
          />
        </Fields>

        <Button 
          title="Salvar"
        />
      </Form>
  )
}