/* eslint-disable prettier/prettier */
import React, { useContext, useState } from "react";
import { SafeAreaView, TouchableOpacity, StatusBar } from "react-native";
import { RestaurantsInfo } from "../components/restaurant-info.component";
import styled from "styled-components";
import { RestaurantContext } from "../../../services/restaurant/restaurant.context";
import { ActivityIndicator, Colors} from "react-native-paper";
import { Search } from "../components/search.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { RestaurantList } from "../components/restaurant-list.style";
import { FadeInView } from "../../../components/animations/fade.animation";
const SafeArea = styled(SafeAreaView)`
flex: 1;
${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;


const ListBox = styled.View`
flex: 1;
flexGrow: 1;
padding: 16px;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
position: absolute;
top: 50%;
left:50%; 
`;
export const RestaurantsScreen = ({ navigation }) => {
  const {isLoading, restaurants} = useContext(RestaurantContext);
  const {favourites} = useContext(FavouritesContext);
  const [isToggled,setIsToggled] = useState(true);
  console.log(navigation);
  return (
  <SafeArea>
    {isLoading && (
      <LoadingContainer>
      <Loading
      size={50}
      animating={true}
      color={Colors.orange300} />
    </LoadingContainer>
    )}
    <Search
    isFavouritesToggle={isToggled}
    onFavouritesToggle={()=>setIsToggled(!isToggled)} />
    {isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />}
    <ListBox>
    <RestaurantList
      data={restaurants}
      renderItem={({item})=>
      { return (
        <TouchableOpacity onPress={()=>navigation.navigate("RestaurantDetail",{
          restaurant: item,
        })}>
        <FadeInView>
        <RestaurantsInfo restaurant={item}
        />
        </FadeInView>
        </TouchableOpacity>);
      }}
      keyExtractor={(item) => item.name}
    />
    </ListBox>
  </SafeArea>
  );
};
