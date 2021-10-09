import React, { useState } from 'react';
import { Modal } from 'react-native'

import { Body } from '../../../utils/defaultStyles'

import { CategorySelectPage } from '../CategorySelectPage'
import { Heading } from '../../elements/Heading';
import { Section } from './Section'

export const RegisterPage: React.FC = () => {
  const [transactionType, setTransactionType] = useState('')
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  })

  const handleTransactionTypeSelect = (type: 'up' | 'down') => {
    setTransactionType(type)
  }

  const handleOpenOrCloseModal = () => {
    setCategoryModalOpen(!categoryModalOpen)
  }

  return (
    <Body>
      <Heading title="Cadastro"/>

      <Section 
        category={category.name}
        transactionType={transactionType}
        handleOpenOrCloseModal={handleOpenOrCloseModal}
        handleTransactionTypeSelect={handleTransactionTypeSelect}
      />
      <Modal visible={categoryModalOpen}>
        <CategorySelectPage
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleOpenOrCloseModal}
        />
      </Modal>
    </Body>
  )
}