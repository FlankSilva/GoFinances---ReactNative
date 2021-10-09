import React from 'react';

import { Row } from '../../../../utils/defaultStyles';
import { 
  Button, 
  CategorySelectButton, 
  Fields, 
  Form,
  TransactionTypeButton,
  InputForm
} from '../../../elements/Form';

interface CategoryProps {
  key: 'category',
  name: 'Categoria'
}
interface Props {
  category: string;
  transactionType: string;
  control: any;
  errors: any;
  handleSubmit: () => void
  handleTransactionTypeSelect: (type: 'up' | 'down') => void
  handleOpenOrCloseModal: () => void
}

export const Section: React.FC<Props> = ({
  transactionType,
  category,
  control,
  errors,
  handleSubmit,
  handleTransactionTypeSelect,
  handleOpenOrCloseModal
}) => {
  

  return (
    <Form justifyContent="space-between">
        <Fields>
          <InputForm 
            name="name"
            control={control}
            placeholder="Nome"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.name && errors.name.message}
          />
          <InputForm
            name="amount"
            control={control}
            placeholder="Preço"
            keyboardType="numeric"
            error={errors.amount && errors.amount.message}
          />
          
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
          onPress={handleSubmit}
        />
      </Form>
  )
}