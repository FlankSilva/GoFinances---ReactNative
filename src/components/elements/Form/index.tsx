import React from 'react';
import { JustifyContentProps } from '../../../utils/typesProps'
import { Container } from './styles';

export interface Props extends JustifyContentProps {
  children: JSX.Element | JSX.Element[];
}

export const Form: React.FC<Props> = ({ children, justifyContent }) => {
  return (
    <Container justifyContent={justifyContent}>
      {children}
    </Container>
  )
}

export { Input } from './Input'
export { Button } from './Button'
export { Fields } from './Fields'
export { TransactionTypeButton } from './TransactionTypeButton'