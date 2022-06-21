import React from 'react';

import { 
  Container,
  Photo,
  User,
  UserGreeting,
  UserName,
  
} from './styles';
export const Profile: React.FC = () => {
  return (
    <Container>
        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/51212629?v=4' }} />
        <User >
          <UserGreeting>Olá, </UserGreeting>
          <UserName>Flank</UserName>
        </User>
    </Container>
  )
}
