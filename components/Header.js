//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";



// create a component
const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingTop: 50,
  },
  text: {
    color: "black",
    fontSize: 18,
  },
});

//make this component available to the app
export default Header;
