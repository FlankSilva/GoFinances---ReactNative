import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { icons } from './option'
import { Container, Title, Icon } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}

export const TransactionTypeButton: React.FC<Props> = ({
  title,
  type,
  isActive,
  ...rest
}) => {
  return (
    <Container 
      isActive={isActive}
      type={type}
      {...rest} 
    >
      <Icon name={icons[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  )
}
