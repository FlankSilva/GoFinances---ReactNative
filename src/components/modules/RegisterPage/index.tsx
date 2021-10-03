import React from 'react';

import { Body } from '../../../utils/defaultStyles'
import { Form, Input, Button, Fields } from '../../elements/Form'
import { Heading } from '../../elements/Heading';

export const RegisterPage: React.FC = () => {
  return (
    <Body>
      <Heading title="Cadastro"/>

      <Form justifyContent="space-between">
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
        </Fields>

        <Button title="Salvar"/>
      </Form>
    </Body>
  )
}