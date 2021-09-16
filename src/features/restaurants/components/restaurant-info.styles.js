/* eslint-disable prettier/prettier */
import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantCard = styled(Card)`
  background-color: white;
  margin-bottom:${(props) => props.theme.space[3]}
`;

export const RestaurantCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Rating = styled.View`
  flex-direction: row;
  margin-top: ${(props) => props.theme.space[1]};
  margin-bottom: ${(props) => props.theme.space[1]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
