import React from 'react';

import { Container } from './styles';

interface Props {
  children: JSX.Element[];
}

export const Fields: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
