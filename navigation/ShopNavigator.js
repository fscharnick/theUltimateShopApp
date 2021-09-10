import React from "react";

import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";

import { Platform } from "react-native";

import ProductOverviewScreen from "../screens/ProductOverviewScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";
import OrdersScreen from "../screens/OrdersScreen";
import UserProductScreen from "../screens/UserProductScreen";
import EditProductScreen from "../screens/EditProductScreen";

import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const defaultNavStyle = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const ProductStackNav = createStackNavigator(
  {
    ProductOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
    UserProduct: UserProductScreen,
    EditProduct: EditProductScreen,
  },
  {
    defaultNavigationOptions: defaultNavStyle,
  }
);

const OrderStackNav = createStackNavigator(
  {
    Orders: OrdersScreen,
  },
  {
    defaultNavigationOptions: defaultNavStyle,
  }
);

const tabBarConfig = {
  Shop: {
    screen: ProductStackNav,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            title="shop"
            name="ios-home"
            size={18}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: Colors.primary,
    },
  },
  Orders: {
    screen: OrderStackNav,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            title="orders"
            name="ios-podium"
            size={18}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: Colors.accent,
    },
  },
};

const tabBottomNav =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabBarConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabBarConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accent,
        },
      });

export default createAppContainer(tabBottomNav);
