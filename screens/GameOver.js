//import liraries
import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import MainButton from "../components/MainButton";
import colors from "../constants/colors";

// create a component
const GameOver = (props) => {
  return (
    <View style={styles.container}>
      <Text>GameOver!!</Text>
      <View style={styles.image__container}>
        <Image
          style={styles.image}
          source={require("../assets/success.png")}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.text__container}>
        User Number:<Text style={styles.text}>{props.chosen}</Text> got it in
        <Text style={styles.text}>{props.rounds}</Text>
      </Text>

      <MainButton onPress={props.resetHandler}>Start new game</MainButton>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image__container: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginVertical: 10,
    borderWidth: 3,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text__container: {
    marginHorizontal: 20,
    textAlign: "center",
    marginVertical: 20,
    fontSize: 20,
  },
  text: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: "bold",
  },
});

//make this component available to the app
export default GameOver;
