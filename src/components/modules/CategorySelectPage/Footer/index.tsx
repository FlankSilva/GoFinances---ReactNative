import React from 'react';
import { Button } from '../../../elements/Form/Button'

import { Container } from './styles';

interface Props {
  closeSelectCategory: () => void
}

export const Footer: React.FC<Props> = ({ closeSelectCategory }) => {
  return (
    <Container>
      <Button title="Selecionar" onPress={closeSelectCategory} />
    </Container>
  )
}

