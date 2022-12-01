import { useBasketProducts } from "../context/BasketContext";
import menuData from "../services/mockMenu";

const displayQuantityPerItem = (uuid: string) => {
  const { items } = useBasketProducts(menuData);
  const item = items.find((item) => item.product.uuid === uuid);
  return item ? item.quantity : 0;
};

export default displayQuantityPerItem;
