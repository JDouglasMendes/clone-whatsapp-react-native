import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { Spinner } from "native-base";
import { Thumbnail, Text } from "native-base";
import { SafeAreaView, View, FlatList } from "react-native";
import Line from "../components/Line";

import api from "../services/api";
import Theme from "../constantes/Theme";

const Item = ({
  name,
  picture,
  message,
  hora,
}: {
  name: string;
  picture: string;
  message: string;
  hora: string;
}) => (
  <TouchableHighlight>
    <View style={styles.itemContainer}>
      <Thumbnail style={styles.thumbnail} source={{ uri: picture }} />
      <View style={styles.userContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.clock}> {hora}</Text>
        </View>
        <Text ellipsizeMode="tail" style={styles.message}>
          {message}
        </Text>
        
      </View>
    </View>
  </TouchableHighlight>
);

interface Props {}
interface State {
  loading: boolean;
  data: any;
}

export default class Conversation extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
    };
  }

  async componentDidMount() {
    this.loadConversations();
  }

  loadConversations = async () => {
    try {
      if (this.state.loading) return;

      this.setState({ loading: true });

      const response = await api.get("?results=10");
      console.log(response.data.results[0].name.first);
      this.setState({
        data: [...this.state.data, ...response.data.results],
        loading: false,
      });
    } catch (err) {
      console.error(err);
    }
  };

  renderFooter = () => {
    if (!this.state.loading) return null;
    return (
      <View>
        <Spinner />
      </View>
    );
  };

  renderItem = ({ item }: { item: any }) => {
    return (
      <Item
        name={item.name.first}
        picture={item.picture.thumbnail}
        message={item.email}
        hora={`${Math.floor(Math.random() * 23 + 1)}:${Math.floor(
          Math.random() * 50 + 10
        )}`}
      />
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.login.uuid}
          onEndReachedThreshold={0.1}
          onEndReached={this.loadConversations}
          ListFooterComponent={this.renderFooter}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  userName: {
    color: "white",
  },
  itemContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: Theme.DEFAULT_PADDING,
    flexDirection: "row",
  },
  userContainer: {
    flex: 6,
    paddingRight: Theme.DEFAULT_PADDING,
    borderBottomWidth: 0.2,
    borderBottomColor: "gray",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: Theme.DEFAULT_PADDING,
  },
  clock: {
    color: "gray",
  },
  thumbnail: {
    flex: 1,
  },
  message: {
    paddingLeft: Theme.DEFAULT_PADDING,
    color: "gray",
  },
});
