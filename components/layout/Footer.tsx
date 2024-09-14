import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
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

const Footer = () => {

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => {
          /* Handle Home press */
        }}
      >
        <FontAwesome name="home" size={24} color="#666" />
        <Text style={styles.footerText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => {
          /* Handle Explore press */
        }}
      >
        <FontAwesome name="globe" size={24} color="#666" />
        <Text style={styles.footerText}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => {
          /* Handle Profile press */
        }}
      >
        <FontAwesome name="user" size={24} color="#666" />
        <Text style={styles.footerText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Footer;
