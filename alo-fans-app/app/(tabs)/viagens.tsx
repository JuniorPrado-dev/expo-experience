import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Viagens = () => {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground style={styles.image} resizeMode="cover" source={require("../../assets/images/avião.jpg")}>
        <Text style={styles.title}>Viagens</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Viagens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
   
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    backgroundColor:"#00FFBB"
  },
});
