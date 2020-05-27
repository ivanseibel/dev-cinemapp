import * as React from 'react';

import { Container, Title, Welcome } from './styles';

const Header = () => {
  return (
    <Container>
      <Title>Cinema APP</Title>
      <Welcome>Bem-vindo ao mundo espetacular do cinema</Welcome>
    </Container>
  );
};

export default Header;
