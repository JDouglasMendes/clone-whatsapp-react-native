import React from "react";
import { View } from "react-native";
import { StyleSheet, Text } from "react-native";
import Theme from "../constantes/Theme";

const TransmissionLists: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.listas]}>
        <Text style={styles.label}>Listas de transmissão</Text>
        <Text style={styles.label}>Novo grupo</Text>
      </View>
    </View>
  );
};

export default TransmissionLists;

const styles = StyleSheet.create({
  label: {
    color: "#4d94ff",
  },
  listas: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  container: {
    marginTop: 5,
    marginLeft: Theme.DEFAULT_PADDING,
    marginRight: Theme.DEFAULT_PADDING,
  },
});
