import React, { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../../../components/typography/text.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react/cjs/react.development";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const InnerSnap = styled.View`
  width: 100%;
  height: 100%;
  z-index: 999;
`;

export const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef();
  console.log(cameraRef);
  const { user } = useContext(AuthenticationContext);
  const [hasPermission, setHasPermission] = useState(null);
  const snap = async () => {
    if (useRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`,photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Do not have permission.</Text>;
  }
  return (
    <ProfileCamera
      ref={(camera) => (cameraRef.current = camera)}
      type={Camera.Constants.Type.front}
      ratio={"16:9"}
    >
      <TouchableOpacity onPress={snap}>
        <InnerSnap />
      </TouchableOpacity>
    </ProfileCamera>
  );
};
