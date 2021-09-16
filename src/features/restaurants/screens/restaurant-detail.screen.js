/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { List } from "react-native-paper";
import { RestaurantsInfo } from "../components/restaurant-info.component";

import { SafeArea } from "../../../components/utility/safe-area.compnent";

export const RestaurantDetailScreen = ({ route }) => {
    //console.log(">>>",route);
    const [breakfastExpanded,setBreakfastExpanded] = useState(false);
    const [lunchExpanded,setLunchExpanded] = useState(false);
    const [dinnerExpanded,setDinnerExpanded] = useState(false);
    const [drinkExpanded,setDrinkExpanded] = useState(false);
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantsInfo restaurant={restaurant} />
      <ScrollView>
      <List.Accordion
      title="Breakfast"
      left={(props)=> <List.Icon {...props} icon="bread-slice" />}
      expanded={breakfastExpanded}
      onPress={()=>setBreakfastExpanded(!breakfastExpanded)} >
          <List.Item title="Burger" />
          <List.Item title="Fries" />
          <List.Item title="Donut" />

          </List.Accordion>

          <List.Accordion
      title="Lunch"
      left={(props)=> <List.Icon {...props} icon="hamburger" />}
      expanded={lunchExpanded}
      onPress={()=>setLunchExpanded(!lunchExpanded)} >

          <List.Item title="Pizza" />
          <List.Item title="Chicken" />
          <List.Item title="Fish" />
          </List.Accordion>

          <List.Accordion
      title="Dinner"
      left={(props)=> <List.Icon {...props} icon="food" />}
      expanded={dinnerExpanded}
      onPress={()=>setDinnerExpanded(!dinnerExpanded)} >

          <List.Item title="Hamburger" />
          <List.Item title="Sanario" />
          <List.Item title="Oats" />
          </List.Accordion>

          <List.Accordion
      title="Drink"
      left={(props)=> <List.Icon {...props} icon="cup" />}
      expanded={drinkExpanded}
      onPress={()=>setDrinkExpanded(!drinkExpanded)} >

            <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Coke" />
          </List.Accordion>

          </ScrollView>

    </SafeArea>
  );
};
