import React from 'react';

import { Header, Title } from './styles'

interface Props {
  title: string;
}

export const Heading: React.FC<Props> = ({ title }) => {
  return (
    <Header>
      <Title>{title}</Title>
    </Header>
  )
}