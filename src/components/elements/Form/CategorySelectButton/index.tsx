import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title, Icon } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export const CategorySelectButton: React.FC<Props> = ({
  title,
  ...rest
}) => {
  return (
    <Container
      activeOpacity={0.7}
      {...rest}
    >
      <Title>{title}</Title>
      <Icon name="chevron-down" />
    </Container>
  )
}
