import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Ionicons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Theme from "../constantes/Theme";

export default class ArchivedConversation extends React.Component {
  render(): any {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.iconContainer}>
            <FontAwesome5 name="trash" size={12} color={Theme.COLOR_LABEL} />
          </View>
          <Text style={[styles.label, styles.conversarArquivadas]}>
            Conversas arquivadas
          </Text>
        </View>
        <Text style={styles.contatorConversas}>0</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    color: "#4d94ff",
  },
  container: {
    marginTop: 10,
    marginLeft : Theme.DEFAULT_PADDING,
    marginRight: Theme.DEFAULT_PADDING,    
    flexDirection: "row",
    justifyContent: "space-between",
  },
  conversarArquivadas: {
    paddingLeft: 5,
    fontSize: 16,
  },
  contatorConversas: {
    fontSize: 16,
    color: "gray",
  },
  iconContainer: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: 50,
    width: 25,
    paddingTop: 4,
  },
});
