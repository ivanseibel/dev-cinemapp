import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Button, FooterText } from './styles';

const Footer = () => {
  return (
    <Container>
      <Button type="search">
        <Icon name="search" size={20} color="#fff" />
        <FooterText>Buscar</FooterText>
      </Button>
      <Button type="favorites">
        <Icon name="grade" size={20} color="#fff" />
        <FooterText>Favoritos</FooterText>
      </Button>
    </Container>
  );
};

export default Footer;
