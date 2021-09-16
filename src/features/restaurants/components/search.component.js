/* eslint-disable prettier/prettier */
import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";
const SearchBox = styled.View`
  padding: ${props => props.theme.space[2]};
`;

export const Search = ({ isFavouritesToggle, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);
  console.log(searchKeyword);

  return (
    <SearchBox>
      <Searchbar
      icon={isFavouritesToggle ? "heart" : "heart-outline"}
      onIconPress={onFavouritesToggle}
      placeholder="Search for a location"
      value={searchKeyword}
      onSubmitEditing={() => {
          search(searchKeyword);
      }}
      onChangeText={(text)=>{
          setSearchKeyword(text);
      }}/>
    </SearchBox>
  );
};
