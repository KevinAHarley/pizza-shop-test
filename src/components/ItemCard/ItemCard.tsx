import { FC } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, Pressable } from "react-native";

import { useBasket } from "../../context/BasketContext";
import menuData from "../../services/mockMenu";
import { FoodType } from "../../types";
import displayQuantityPerItem from "../../utils/quantityPerItem";

import styles from "./ItemCard.styles";

const RenderItem: FC<FoodType> = ({ name, uuid, price }) => {
  const { addItem, removeItem } = useBasket();

  return (
    <View style={styles.container} key={uuid}>
      <Text style={styles.text}>
        {name} ({displayQuantityPerItem(uuid)})
      </Text>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>£{(price / 100).toFixed(2)}</Text>
      </View>
      <View style={styles.quantityButtons}>
        <Pressable onPress={() => addItem({ uuid, quantity: 1 })}>
          <FontAwesome name="plus" size={25} color={"white"} />
        </Pressable>
        <Pressable onPress={() => removeItem({ uuid, quantity: 1 })}>
          <FontAwesome name="minus" size={25} color={"white"} style={styles.removeButton} />
        </Pressable>
      </View>
    </View>
  );
};

const ItemCard = () => {
  return (
    <View>
      {Object.keys(menuData).map((uuid) => {
        const item = menuData[uuid];
        return <RenderItem {...item} key={uuid} />;
      })}
    </View>
  );
};

export default ItemCard;
