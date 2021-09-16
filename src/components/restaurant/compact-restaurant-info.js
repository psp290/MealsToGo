/* eslint-disable prettier/prettier */
import React from "react";
import { Platform } from "react-native";
import { WebView } from "react-native-webview";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";
import { Text } from "../typography/text.component";
const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  border-radius: 10px;
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
    const Image = (isAndroid && isMap)  ? CompactWebview : CompactImage;

    console.log(restaurant);
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
