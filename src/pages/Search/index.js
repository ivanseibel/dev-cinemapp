import React, { useState, useEffect } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';

import api from 'axios';

import {
  Container,
  SearchContainer,
  ResultsContainer,
  SearchInput,
  SearchButton,
  ButtonLabel,
  ItemView,
  Poster,
  DescriptionBox,
  Title,
  FavIcon,
} from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [searching, setSearching] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovieData() {
      try {
        const response = await api.get(
          `http://www.omdbapi.com/?apikey=925eba28&s=${searchText}`
        );

        const searchResult = response.data.Response ? response.data.Search : {};

        setMovies(searchResult);

        console.log(response);

        setSearching(false);
      } catch (error) {
        setSearching(false);
      }
    }

    if (searching) {
      getMovieData();
    }
  }, [searching]);

  function handleSearchInputChange(value) {
    setSearchText(value);
  }

  return (
    <Container>
      <Header />
      <SearchContainer>
        <SearchInput onChangeText={handleSearchInputChange} />
        <SearchButton
          onPress={() => {
            setSearching(true);
          }}
        >
          <ButtonLabel>Buscar</ButtonLabel>
        </SearchButton>
      </SearchContainer>
      <ResultsContainer>
        <FlatList
          style={{ marginTop: 30 }}
          data={movies}
          renderItem={({ item }) => (
            <ItemView>
              <Poster source={{ uri: item.Poster }} />
              <DescriptionBox>
                <Title>{item.Title}</Title>
                <Text>Ano: {item.Year}</Text>
              </DescriptionBox>
              <FavIcon name="grade" size={30} oi="blue" />
            </ItemView>
          )}
          keyExtractor={(item) => item.imdbID}
        />
      </ResultsContainer>
      <Footer />
    </Container>
  );
};

export default Search;
