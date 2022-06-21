import React from 'react';

import { Profile } from './Profile'

import { Container, UserWrapper, Icon } from './styles';

export const HeaderDashboard: React.FC = () => {
  return (
    <Container>
      <UserWrapper>
        <Profile />
        <Icon name="power"/>
      </UserWrapper>
    </Container>
  )
}
