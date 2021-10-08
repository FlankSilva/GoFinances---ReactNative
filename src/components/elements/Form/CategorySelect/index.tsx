import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title, Icon } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export const CategorySelect: React.FC<Props> = ({
  title
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Icon name="chevron-down" />
    </Container>
  )
}
