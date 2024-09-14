import { Image, StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
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
  });

const Header = () => {
    return (
        <View style={styles.headerContainer}>
          <Image source={require("../../assets/images/icon.png")} style={styles.headerImage} />
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>Explore flight</Text>
            <Text style={styles.headerSubtitle}>Welcome to flight booking</Text>
          </View>
          <View>
            <TextInput style={styles.headerSearchInput}></TextInput>
          </View>
        </View>
      )
};


export default Header;