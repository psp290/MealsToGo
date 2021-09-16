/* eslint-disable prettier/prettier */
import React from "react";

import { Text, Image, View } from "react-native";

import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import {Title , RestaurantCard,RestaurantCover,Info,Section,SectionEnd,Rating,Address} from "./restaurant-info.styles";
import { Favourite } from "../../../components/favourites/favourite.component";

export const RestaurantsInfo = ({ restaurant = {} }) => {

  const {
    name = "Some Resta",
    icon = "https://freedesignfile.com/upload/2017/04/hotel-flat-icon-vector.jpg",
    photos = [
      "https://th.bing.com/th/id/OIP.dDiA2WZkSQ4hsl9lvp8xjgHaE8?w=251&h=180&c=7&o=5&dpr=1.5&pid=1.7",
    ],
    address = "100 Some Street",
    isOpenNow = true,
    placeId,
    rating = 4.2,
    isCloseTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5} >
      <View>
      <Favourite restaurant={restaurant}/>
      <RestaurantCover key={name} source={{ uri: photos[0] }} />
      </View>
      <Info>
      <Title>{name}</Title>
      <Section>
      <Rating>
      {ratingArray.map((_,i)=>(
         <SvgXml key={`star-${placeId}-${i}`} xml={star} width={20} height={20} />
      ))}
      </Rating>
        <SectionEnd>
          {isCloseTemporarily && (
            <Text style={{color:"orange"}}>Closed Temporarily</Text>
          )}
          <Spacer variant="left.medium" />
          {isOpenNow && <SvgXml xml={open} width={20} height={20}/>}
          <Spacer variant="left.large" />
            <Image style={{width:15,height:15}} source={{uri:icon}} />
        </SectionEnd>
      </Section>
      <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};



/*
      <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.list}>
        <Text>list</Text>
      </View>
    </SafeAreaView>

    */
