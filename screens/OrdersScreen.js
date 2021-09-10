import React from "react";
import { FlatList, Text } from "react-native";

import OrderItem from "../components/OrderItem";

import { useSelector } from "react-redux";

const OrdersScreen = (props) => {
  const orders = useSelector((state) => state.orders.orders);
  return (
    <FlatList
      data={orders}
      renderItem={(itemData) => (
        <OrderItem
          amount={itemData.item.totalAmount}
          date={itemData.item.readableDate}
          items={itemData.item.items}
        />
      )}
    />
  );
};

OrdersScreen.navigationOptions = {
  headerTitle: "Your Orders",
};

export default OrdersScreen;
