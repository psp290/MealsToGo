/* eslint-disable prettier/prettier */
import { Avatar, List } from "react-native-paper";
import React, { useContext, use } from "react";
import { Text } from "../../../../src/components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.compnent";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react/cjs/react.development";
import { useFocusEffect } from "@react-navigation/core";
const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.4);
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const Settings = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [ photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) =>{
    const photoUri = AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };
  useFocusEffect(()=>{
    getProfilePicture(user);
  },[user]);
  return (
    <SafeArea>
      <Spacer size="large" />
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
        {!photo ? (<Avatar.Icon size={180} icon="human" backgroundColor="#2a73" />) : (
          <Avatar.Image size={180} source={{uri:photo}} backgroundColor="#2a73" />
        )
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem title="Logout" onPress={onLogout} />
      </List.Section>
    </SafeArea>
  );
};
