import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    margin: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  suggestContainer: {
    margin: 20,
    marginRight: 0,
  },
  horizontalScroll: {
    flexDirection: "row",
  },
  suggestItem: {
    marginRight: 10,
  },
  suggestImage: {
    width: 220,
    height: 200,
    borderRadius: 10,
  },
  suggestTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  suggestPrice: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  inputSearchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  searchIcon: {
    position: "absolute",
    left: 16,
    zIndex: 1,
  },
  textInput: {
    flex: 1,
    height: 50,
    borderColor: "gray",
    borderRadius: 10,
    paddingLeft: 50,
    backgroundColor: "#f0f0f0",
  },
  headerContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerImage: {
    width: 50,
    height: 50,
  },
  headerTextContainer: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#666",
    marginLeft: 10,
  },
  headerSearchInput: {
    width: 50,
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 25,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  footerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },
  footerItem: {
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
});

function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header/>

        {inputSearch}

        {suggest}

        {content}
      </ScrollView>

      <Footer/>
    </View>
  );
}

const content = (
  <View style={styles.contentContainer}>
    <Text style={styles.title}>Explore Destinations</Text>
    <Image
      source={{
        uri: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-phong-canh-dep-41.jpg",
      }}
      style={styles.image}
    />
    <Image
      source={{
        uri: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-phong-canh-dep-41.jpg",
      }}
      style={styles.image}
    />
    <Image
      source={{
        uri: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-phong-canh-dep-41.jpg",
      }}
      style={styles.image}
    />
  </View>
);

const suggest = (
  <View style={styles.suggestContainer}>
    <Text style={styles.title}>The best cities for you</Text>
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.horizontalScroll}
    >
      <View style={styles.suggestItem}>
        <Image
          source={{
            uri: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-phong-canh-dep-41.jpg",
          }}
          style={styles.suggestImage}
        />
        <Text style={styles.suggestTitle}>HongKong</Text>
        <Text style={styles.suggestPrice}>from $33.00 to $38.00</Text>
      </View>
      <View style={styles.suggestItem}>
        <Image
          source={{
            uri: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-phong-canh-dep-41.jpg",
          }}
          style={styles.suggestImage}
        />
        <Text style={styles.suggestTitle}>HongKong</Text>
        <Text style={styles.suggestPrice}>from $33.00 to $38.00</Text>
      </View>
      <View style={styles.suggestItem}>
        <Image
          source={{
            uri: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-phong-canh-dep-41.jpg",
          }}
          style={styles.suggestImage}
        />
        <Text style={styles.suggestTitle}>HongKong</Text>
        <Text style={styles.suggestPrice}>from $33.00 to $38.00</Text>
      </View>
    </ScrollView>
  </View>
);

const inputSearch = (
  <View style={styles.inputSearchContainer}>
    <TouchableOpacity
      onPress={() => {
        /* Handle button press */
      }}
      style={styles.searchIcon}
    >
      <FontAwesome name="search" size={24} color="#aaa" />
    </TouchableOpacity>
    <TextInput style={styles.textInput} placeholder="Find a flight" placeholderTextColor="#aaa" />
  </View>
);

export default HomeScreen;
