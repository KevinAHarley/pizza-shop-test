import ItemCard from "../../components/ItemCard/ItemCard";
import { View } from "../../components/Themed";

import styles from "./MenuScreen.styles";

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <ItemCard />
    </View>
  );
};

export default MenuScreen;
