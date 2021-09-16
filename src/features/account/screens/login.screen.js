/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { useContext } from "react/cjs/react.development";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AccountBackground, AccountContainer, AccountCover, AuthButton, AuthInput, ErrorContainer, Title } from "../components/account.style";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {onLogin, isLoading, error} = useContext(AuthenticationContext);
  return (<AccountBackground>
      <AccountCover/>
      <Title>Login</Title>
      <AccountContainer>
        <AuthInput
        label="E-mail"
        value={email}
        textContentType="emailAddress"
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={(u) => setEmail(u)} />

<Spacer size="large">
      <AuthInput
      label="Password"
      value={password}
      textContentType="password"
      secureTextEntry
      autoCapitalize="none"
      onChangeText={(u) => setPassword(u)} />
      </Spacer>
      {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer>
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email,password)}
          >
            Login
          </AuthButton>
        </Spacer>
        </AccountContainer>
        <Spacer size="large">
        {!isLoading ? (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
  </AccountBackground>);
};
