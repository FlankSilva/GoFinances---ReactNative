import React from 'react';

import { Container, Title, Icon } from './styles';

import { DataHeader } from '../index'

export const Header: React.FC<DataHeader> = ({ title, icon }) => {
  return (
    <Container>
      <Title type={title}>{title}</Title>
      <Icon name={icon} type={title} />
    </Container>
  )
}
