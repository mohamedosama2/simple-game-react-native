import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import GameOver from "./screens/GameOver";
import GameScrren from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';


// const loadFonts = () => {
//  return Font.loadAsync({
//     "sans-bold": require("./assets/Fonts/OpenSans-Bold.ttf"),
//     "sans-regular": require("./assets/Fonts/OpenSans-Regular.ttf"),
//   });
// };

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [rounds, setRounds] = useState(0);
  // const [isLoadedData, setIsLoadedData] = useState(false);

  // if (!isLoadedData) {
  //   <AppLoading
  //     startAsync={loadFonts}
  //     onFinish={() => setIsLoadedData(true)}
  //     onError={(err) => console.log(err)}
  //   />;
  // }
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const roundHandler = (num) => setRounds(num);
  const changeNumberHandler = (num) => {
    setUserNumber(num);
  };

  const resetHandler = () => {
    setRounds(0);
    setUserNumber(null);
  };

  let content = <StartGameScreen changeNumberHandler={changeNumberHandler} />;
  if (userNumber && rounds <= 0) {
    content = <GameScrren chosen={userNumber} roundHandler={roundHandler} />;
  } else if (rounds > 0) {
    content = (
      <GameOver
        rounds={rounds}
        chosen={userNumber}
        resetHandler={resetHandler}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Header title="Guess A Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
