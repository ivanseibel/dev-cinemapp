import * as React from 'react';
import { Text } from 'react-native';

import {
  Container,
  SearchContainer,
  ResultsContainer,
  SearchInput,
  SearchButton,
  ButtonLabel,
} from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Search = () => {
  return (
    <Container>
      <Header />
      <SearchContainer>
        <SearchInput />
        <SearchButton>
          <ButtonLabel>Buscar</ButtonLabel>
        </SearchButton>
      </SearchContainer>
      <ResultsContainer>
        <Text>Search Results</Text>
      </ResultsContainer>
      <Footer />
    </Container>
  );
};

export default Search;
