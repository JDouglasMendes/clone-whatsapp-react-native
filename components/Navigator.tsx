import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Conversation from "./Conversations";
import { Ionicons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";

function Status() {
  return <View></View>;
}

function Ligacoes() {
  return <View></View>;
}
function Camera() {
  return <View></View>;
}

function Ajustes() {
  return <View></View>;
}

const Tab = createBottomTabNavigator();

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>    
      <Tab.Navigator      
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            size = 30;
            if (route.name === "Status") {
              iconName = focused ? "ios-globe" : "ios-globe";
            } else if (route.name === "Ligacoes") {
              iconName = focused ? "ios-list-box" : "ios-call";
            } else if (route.name === "Camera") {
              iconName = focused ? "ios-list-box" : "ios-camera";
            } else if (route.name === "Conversas") {
              iconName = focused ? "ios-chatbubbles" : "ios-chatbubbles";
            } else if (route.name === "Ajustes") {
              iconName = focused ? "ios-cog" : "ios-cog";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "gray",
          style: styles.container,

        }}
      >
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="Ligacoes" component={Ligacoes} />
        <Tab.Screen name="Camera" component={Camera} />
        <Tab.Screen name="Conversas" component={Conversation} />
        <Tab.Screen name="Ajustes" component={Ajustes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({
    container: {
        backgroundColor : "#404040",        
    }
});
