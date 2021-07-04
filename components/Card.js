//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

// define your styles
const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
    borderRadius: 8,
    padding: 20,
  },
});

//make this component available to the app
export default Card;
