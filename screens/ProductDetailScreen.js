import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import Colors from "../constants/Colors";

import * as cartActions from "../store/actions/cart";

const ProductDetailScreen = (props) => {
  const prodId = props.navigation.getParam("productId");

  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === prodId)
  );

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedProduct.imageUrl }} style={styles.image} />
      <View style={styles.buttonContainer}>
        <Button
          color={Colors.primary}
          title="Add to Cart"
          onPress={() => {
            dispatch(cartActions.addToCart(selectedProduct));
          }}
        />
      </View>
      <View style={styles.detail}>
        <View style={styles.price}>
          <Text style={styles.priceText}>
            ${selectedProduct.price.toFixed(2)}
          </Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.text}>{selectedProduct.description}</Text>
        </View>
      </View>
    </View>
  );
};

ProductDetailScreen.navigationOptions = (navData) => {
  const productTitle = navData.navigation.getParam("productTitle");

  return {
    headerTitle: productTitle,
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },

  container: {
    alignItems: "center",
  },

  buttonContainer: {
    marginTop: 16,
    marginBottom: 24,
  },

  priceText: {
    marginBottom: 24,
    fontSize: 18,
    color: "#888",
    fontFamily: "open-sans-bold",
  },

  detail: {
    alignItems: "center",
  },

  text: {
    marginHorizontal: 16,
    textAlign: "center",
  },
});

export default ProductDetailScreen;
