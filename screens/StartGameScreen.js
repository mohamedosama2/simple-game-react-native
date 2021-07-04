//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import MainButton from "../components/MainButton";
import colors from "../constants/colors";

// create a component
const StartGameScreen = (props) => {
  const [enterdValue, setEnteredValue] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [inputValue, setInputValue] = useState(false);

  const resetHandler = () => {
    setEnteredValue("");
    setIsConfirmed(false);
    setInputValue("");
  };
  const submitHandler = () => {
    let value = parseInt(enterdValue);
    if (isNaN(value) || value <= 0 || value > 99) {
      Alert.alert("Inavlid number!", "number must be between 0 and 99", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }

    setEnteredValue("");
    setInputValue(value);
    setIsConfirmed(true);
  };
  const changeValue = (value) => {
    setEnteredValue(value.replace(/[^0-9]/g, ""));
  };

  let message;
  if (isConfirmed) {
    message = (
      <Card style={styles.card}>
        <Text>You Selected</Text>
        <View style={styles.number__container}>
          <Text style={styles.number}>{inputValue}</Text>
        </View>
        <MainButton onPress={() => props.changeNumberHandler(inputValue)}>
          Start Game
        </MainButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.container__heading}>Start A New Game</Text>

        <Card style={{ alignItems: "center", width: 300, maxWidth: "80%" }}>
          <Text style={styles.container__heading2}>Select A Number</Text>
          <Input
            style={styles.container__input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            value={enterdValue}
            onChangeText={changeValue}
          />
          <View style={styles.container__buttons}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={colors.secondary}
                onPress={resetHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Submit"
                color={colors.primary}
                onPress={submitHandler}
              />
            </View>
          </View>
        </Card>
        {message}
      </View>
    </TouchableWithoutFeedback>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  container__heading: {
    fontSize: 20,
    alignItems: "center",
    marginVertical: 10,
    fontFamily: "Inter_900Black",
  },
  container__heading2: {
    fontSize: 10,
    alignItems: "center",
  },
  container__input: {
    width: 30,
    height: 30,
  },
  container__buttons: {
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    width: 100,
  },
  card: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.secondary,
    borderRadius: 10,
    borderWidth: 2,
    color: colors.secondary,
    width: 200,
    maxWidth: "80%",
    marginVertical: 20,
  },
  number__container: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.secondary,
    borderRadius: 10,
    borderWidth: 2,
    padding: 5,
    marginVertical: 10,
  },
  number: {
    fontSize: 20,
  },
});

//make this component available to the app
export default StartGameScreen;
