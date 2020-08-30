import React from "react";
import { AppLoading } from "expo";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Reactotron, { overlay } from "reactotron-react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";

import Search from "./components/Search";
import ArchivedConversation from "./components/ArchivedConversation";
import Line from "./components/Line";
import TransmissionLists from "./components/TransmissionLists";
import Navigator from "./components/Navigator";

import Theme from "./constantes/Theme";

declare global {
  interface Console {
    tron: any;
  }
}

Reactotron.configure({
  name: "React Native Demo",
})
  .useReactNative()
  .use(overlay())
  .connect();

interface Props {}
interface State {
  isReady: boolean;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.label, styles.font24]}>Editar</Text>
          <FontAwesome name="edit" size={20} color={Theme.COLOR_LABEL} />
        </View>
        <View
          style={{
            paddingTop: Theme.DEFAULT_PADDING,
            paddingLeft: Theme.DEFAULT_PADDING,
            paddingRight: Theme.DEFAULT_PADDING,
          }}
        >
          <Text style={styles.conversas}>Conversas</Text>
        </View>
        <Search />
        <ArchivedConversation />
        <Line />
        <TransmissionLists />
        <Line />
        <Navigator />
      </View>
    );
  }
}

const OverlayApp = Reactotron.overlay(App);

export default OverlayApp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  label: {
    color: "#4d94ff",
  },
  font24: {
    fontSize: 16,
  },
  header: {
    paddingTop: Theme.DEFAULT_PADDING,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: Theme.DEFAULT_PADDING,
    paddingRight: Theme.DEFAULT_PADDING,
  },

  conversas: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
