/* eslint-disable prettier/prettier */
import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";
const SearchBox = styled.View`
  padding: ${props => props.theme.space[2]};
  position:absolute;
  z-index:999;
  top:10px;
  width:100%;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);
  console.log(searchKeyword);
  useEffect(()=>{
      setSearchKeyword(keyword);
  },[keyword]);
  return (
    <SearchBox>
      <Searchbar
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
