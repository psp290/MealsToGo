/* eslint-disable prettier/prettier */
import React, { useState, createContext, useEffect, useContext } from "react";
import { LocationContext } from "../location/location.context";
import { restaurantsRequest, restaurantsTransform } from "./restaurant.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {

    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);

    const retrieveRestaurants = (loc)=>{
        setIsLoading(true);
        setRestaurants([]);
        setTimeout(()=>{
            restaurantsRequest(loc)
            .then(restaurantsTransform)
            .then((restaurnts)=>{
                setIsLoading(false);
                setRestaurants(restaurnts);
            }).catch(err => {
                setIsLoading(false);
                setError(err);
            });
        },500);
    };
    useEffect(() => {
        if (location){
            const locationString = `${location.lat},${location.lng}`;
            console.log(">>>>>",locationString);
            retrieveRestaurants(locationString);
        }
    },[location]);

  return <RestaurantContext.Provider value={{
        restaurants,
        isLoading,
        error,
  }}>{children}</RestaurantContext.Provider>;
};
