import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import Colors from "../constants/Colors";

const ProductItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: props.image }} style={styles.image} />
      </View>
      <View style={styles.detail}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.amount}>${props.amount}</Text>
        <View style={styles.buttonContainer}>{props.children}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 10,
    elevation: 5,
  },

  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  detail: {
    alignItems: "center",
    marginVertical: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginTop: 16,
  },

  title: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },

  amount: {
    fontSize: 16,
    color: "#888",
  },
});

export default ProductItem;
