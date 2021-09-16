/* eslint-disable prettier/prettier */
import React from "react";
import {Text} from "react-native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../../src/features/restaurants/screens/restaurant.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();
export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{
      headerMode:"none",
      ...TransitionPresets.ModalPresentationIOS,
      }} >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};

