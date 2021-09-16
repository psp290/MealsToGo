/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { Navigator } from "./app.navigator";
import { NavigationContainer } from "@react-navigation/native";
import { AccountNavigator } from "./account.navigator";
export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      { isAuthenticated ? <Navigator /> : <AccountNavigator />}
    </NavigationContainer>
);
};
