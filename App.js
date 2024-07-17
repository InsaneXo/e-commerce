import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigator from "./src/navigation/Index";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    WorkSans: require("./assets/fonts/WorkSans-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="black" />
        <Navigator />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
