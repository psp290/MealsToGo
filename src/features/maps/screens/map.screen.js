/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components";
import { SafeArea } from "../../../components/utility/safe-area.compnent";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurant/restaurant.context";
import { MapCallout } from "../components/map-callout.component";
import { Search } from "../components/search.component";

const Map = styled(MapView)`
height:100%;
`;
const SomeText = styled.Text`
font-weight:bold;
`;
export const MapScreen = ({navigation}) =>{
    const {location} = useContext(LocationContext);
    const { restaurants = {}} = useContext(RestaurantContext);
    const [ latDelta, setLatDelta] = useState(0);

    const {lat, lng, viewport} = location;
    useEffect(()=>{
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;
        setLatDelta(northeastLat - southwestLat);
    }, [location, viewport]);
    return (
<SafeArea>
    <Search />
    <Map
    region={{
        latitude:lat,
        longitude:lng,
        latitudeDelta:latDelta,
        longitudeDelta:0.02,
    }}>
        {restaurants.map((restaurant)=>{
            return (<MapView.Marker
            key={restaurant.name}
            title={restaurant.name}
            coordinate={{
                latitude:restaurant.geometry.location.lat,
                longitude:restaurant.geometry.location.lng,
            }}
            >
                <MapView.Callout onPress={() => navigation.navigate("RestaurantDetail",
                {
                    restaurant,
                })
                }>
                <View>
                    <MapCallout restaurant={restaurant} />
                </View>
                </MapView.Callout>
            </MapView.Marker>);
        })}
    </Map>
</SafeArea>
);
    };
