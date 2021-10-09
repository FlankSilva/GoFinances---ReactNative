import React, { useState, useEffect } from 'react';
import { 
  Keyboard, 
  Modal, 
  TouchableWithoutFeedback, 
  Alert
} from 'react-native'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Body } from '../../../utils/defaultStyles'

import { CategorySelectPage } from '../CategorySelectPage'
import { Heading } from '../../elements/Heading';
import { Section } from './Section'

import { schema } from './schema'

interface FormData {
  name: string;
  amount: string;
}

export const RegisterPage: React.FC = () => {
  const [transactionType, setTransactionType] = useState('')
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)

  const dataKey = '@gofinances:transaction'

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  })

  const { 
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const handleTransactionTypeSelect = (type: 'up' | 'down') => {
    setTransactionType(type)
  }

  const handleOpenOrCloseModal = () => {
    setCategoryModalOpen(!categoryModalOpen)
  }

  const handleRegister = async (form: FormData) => {
    if (!transactionType) {
      return Alert.alert('Selecione o tipo da transação')
    }

    if (category.key === 'category') {
      return Alert.alert('Selecione a categoria')
    }

    const { name, amount } = form
    const { key } = category

    const data = {
      name,
      amount,
      transactionType,
      category: key
    }

    try { 
      await AsyncStorage.setItem(dataKey, JSON.stringify(data));

    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível salva')
    }
  }

  useEffect(() => {
    const loadData = async () => {
      const data =  await AsyncStorage.getItem(dataKey)
      console.log(JSON.parse(data!));
      
    }

    loadData()
  }, [])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Body>
          <Heading title="Cadastro"/>
          <Section 
            category={category.name}
            transactionType={transactionType}
            handleOpenOrCloseModal={handleOpenOrCloseModal}
            handleTransactionTypeSelect={handleTransactionTypeSelect}
            control={control}
            handleSubmit={handleSubmit(handleRegister)}
            errors={errors}
          />
          <Modal visible={categoryModalOpen}>
            <CategorySelectPage
              category={category}
              setCategory={setCategory}
              closeSelectCategory={handleOpenOrCloseModal}
            />
          </Modal>
      </Body>
    </TouchableWithoutFeedback>
  )
}