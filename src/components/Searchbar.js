import React from 'react';
import {Searchbar} from 'react-native-paper';

const SearchBar = ({searchText, onSearchHandler}) => {
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onSearchHandler}
      value={searchText}
    />
  );
};

export default SearchBar;
