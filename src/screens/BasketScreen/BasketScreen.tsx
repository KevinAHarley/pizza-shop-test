import { useNavigation } from "@react-navigation/native";

import { Alert, Pressable } from "react-native";
import { Text, View } from "../../components/Themed";
import { useBasketProducts } from "../../context/BasketContext";
import menuData from "../../services/mockMenu";
import { BasketItemType } from "../../types";

import styles from "./BasketScreen.styles";

const BasketItems = ({ data, quantity, totalPrice }: BasketItemType) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.foodItems}>
          <Text>{quantity} x </Text>
          <Text>{data.name}</Text>
        </View>
        <Text>£{(totalPrice / 100).toFixed(2)}</Text>
      </View>
    </View>
  );
};

const BasketScreen = () => {
  const { items, quantity, totalPrice, discount } = useBasketProducts(menuData);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <BasketItems
          data={item.product}
          quantity={item.quantity}
          totalPrice={item.totalPrice}
          key={item.product.uuid}
        />
      ))}

      {quantity > 0 ? (
        <>
          <View style={styles.container}>
            {discount ? <Text>Savings: £{(discount.value / 100).toFixed(2)}</Text> : <Text>No discounts found</Text>}
            {discount ? (
              <Text>Total: £{((totalPrice - discount.value) / 100).toFixed(2)}</Text>
            ) : (
              <Text>Total: £{(totalPrice / 100).toFixed(2)}</Text>
            )}
          </View>
          {quantity > 0 && (
            <View style={styles.container}>
              <Pressable onPress={() => Alert.alert("Not quite ready yet ...")}>
                <Text>Checkout</Text>
              </Pressable>
            </View>
          )}
        </>
      ) : (
        <>
          <Text>Your basket is empty</Text>
          <Pressable onPress={() => navigation.navigate("Root", { screen: "MenuScreen" })}>
            <Text style={styles.navigationText}>Click here to go our Menu</Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default BasketScreen;
