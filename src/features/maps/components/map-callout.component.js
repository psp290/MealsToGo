/* eslint-disable prettier/prettier */
import React from "react";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info";
export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo isMap restaurant={restaurant} />;
};