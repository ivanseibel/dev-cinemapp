import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const SearchContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholder: 'Procure filmes por título...',
})`
  background: #e6e7eb;
  flex: 1;
  height: 45px;
`;

export const SearchButton = styled.TouchableOpacity`
  background: #7981ff;
  height: 45px;
  margin-left: 10px;
  padding: 10px 20px;
  border-radius: 4px;
`;

export const ButtonLabel = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const ResultsContainer = styled.View`
  flex: 1;
`;
