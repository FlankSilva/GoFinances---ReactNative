import React, { useState } from 'react';

import { Body } from '../../../utils/defaultStyles'
import { Form, Input, Button, Fields, TransactionTypeButton, CategorySelect } from '../../elements/Form'
import { Heading } from '../../elements/Heading';
import { Row } from '../../../utils/defaultStyles'

export const RegisterPage: React.FC = () => {
  const [transactionType, setTransactionType] = useState('')

  const handleTransactionTypeSelect = (type: 'up' | 'down') => {
    setTransactionType(type)
  }

  return (
    <Body>
      <Heading title="Cadastro"/>

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
          <CategorySelect title="Selecionar"/>
        </Fields>

        <Button title="Salvar"/>
      </Form>
    </Body>
  )
}