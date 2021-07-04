//import liraries
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import colors from "../constants/colors";

import { Ionicons } from "@expo/vector-icons";

//main func

const generateRandomNum = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  let ranNum = Math.floor(Math.random() * (max - min)) + min;
  if (exclude === ranNum) return generateRandomNum(min, max, exclude);
  return ranNum;
};

// create a component
const GameScrren = (props) => {
  const ran = generateRandomNum(1, 100, props.chosen);
  const [randonNum, setRandomNum] = useState(ran);
  const [rounds, setRounds] = useState([ran.toString()]);

  const lowNumber = useRef(1);
  const highNumber = useRef(100);

  const { roundHandler, chosen } = props;

  useEffect(() => {
    if (randonNum === chosen) {
      roundHandler(rounds.length);
    }
  }, [chosen, roundHandler, randonNum]);

  const changeNumber = (direction) => {
    if (
      (direction === "lower" && props.chosen > randonNum) ||
      (direction === "greater" && props.chosen < randonNum)
    ) {
      Alert.alert("Dont 't lie", "blaaaaaaaaash kedb....", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      highNumber.current = randonNum;
    } else {
      lowNumber.current = randonNum + 1;
    }
    const value = generateRandomNum(
      lowNumber.current,
      highNumber.current,
      randonNum
    );
    setRandomNum(value);
    setRounds((prev) => [value.toString(), ...prev]);
  };
  return (
    <View style={styles.container}>
      <Text>Oponnent's Guess</Text>
      <View style={styles.number__container}>
        <Text style={styles.number}>{randonNum}</Text>
      </View>
      <Card style={styles.button__container}>
        <MainButton onPress={changeNumber.bind(this, "lower")}>
          <Ionicons name="md-remove" size={26} color="white" />
        </MainButton>
        <MainButton onPress={changeNumber.bind(this, "greater")}>
          <Ionicons name="md-add" size={26} color="white" />
        </MainButton>
      </Card>
      <View style={styles.list}>
        {/* <ScrollView contentContainerStyle={styles.scrollList}> */}
        <FlatList
          data={rounds}
          keyExtractor={(item) => item}
          renderItem={(item) => {
            return (
              <View style={styles.item}>
                <Text style={styles.text}>#{rounds.length - item.index}</Text>
                <Text style={styles.text}>{item.item}</Text>
              </View>
            );
          }}
          contentContainerStyle={styles.scrollList}
        />
        {/* {rounds.map((r, i) => {
            return (
             
            );
          })} */}
        {/* </ScrollView> */}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
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
    fontSize: 18,
    color: colors.secondary,
  },
  button__container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 400,
    maxWidth: "80%",
    padding: 20,
  },
  list: {
    flex: 1,
    width: "60%",
  },
  scrollList: {
    flexGrow: 1,
    justifyContent: "flex-end",
    // alignItems: "center",
  },
  item: {
    flexDirection: "row",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    padding: 16,
    marginVertical: 12,
    justifyContent: "space-between",
    width: "100%",
  },
  text: {},
});

//make this component available to the app
export default GameScrren;
