import React from 'react';

import { 
  Container,
  Photo,
  User,
  UserInfo,
  UserWrapper,
  Icon,
  UseName,
  UserGreeting
} from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{ uri:  'https://avatars.githubusercontent.com/u/51212629?v=4'}} />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UseName>Flank</UseName>
            </User>
          </UserInfo>
          <Icon name="power"/>
        </UserWrapper>
      </Container>
  )
}