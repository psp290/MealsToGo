/* eslint-disable prettier/prettier */
import React, {useContext} from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "../../../src/components/utility/safe-area.compnent";
import { RestaurantNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/maps/screens/map.screen";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantContextProvider } from "../../services/restaurant/restaurant.context";
import { SettingsNavigator } from "./setting.navigator";
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Restaurant") {
            iconName = focused ? "fast-food-sharp" : "fast-food-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "md-settings-sharp" : "md-settings-outline";
          } else if (route.name === "Map") {
            iconName = focused ? "md-map" : "md-map-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Restaurant" component={RestaurantNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsNavigator} />
    </Tab.Navigator>
    </RestaurantContextProvider>
    </LocationContextProvider>
    </FavouritesContextProvider>
  );
}

export const Navigator = () => {
  return (
      <MyTabs />
  );
};
