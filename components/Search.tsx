import React from "react";
// import { Container, Header, Content, Item, Input, Icon } from "native-base";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Ionicons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Theme from "../constantes/Theme";

export default class Seach extends React.Component {
  render(): any {
    return (
      <View
        style={{
          marginLeft: Theme.DEFAULT_PADDING,
          marginRight: Theme.DEFAULT_PADDING,
        }}
      >
        <View style={styles.containerSearch}>
          <Ionicons name="ios-search" color="darkgray" size={24} />
          <TextInput style={styles.search} placeholder="Pesquisar" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerSearch: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "gray",
    borderRadius: 5,
    paddingLeft: 5,
  },
  search: {
    marginLeft: 5,
    height: 25,
  },
  iconHeader: {
    alignItems: "center",
  },
  item: {
    alignContent: "center",
    paddingLeft: 5,
    flexDirection: "row",
    borderWidth: 0,
  },
});
