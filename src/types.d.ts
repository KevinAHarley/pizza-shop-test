export type FoodType = {
  uuid: string;
  name: string;
  price: number;
  size?: string;
  type: string;
};

export type DiscountType = {
  uuid: string;
  name: string;
  description: string;
  discountDay: number;
  discountCategory: string;
  discountMinRequired: number;
};

export type FoodsType = Record<string, Product>;

export type QuantityType = number;
export type BasketType = Record<string, QuantityType>;

export type AddFoodType = { uuid: string; quantity?: QuantityType };
export type RemoveFoodType = { uuid: string; quantity?: QuantityType };
export type ClearFoodType = { uuid: string };

export type BasketContextType = {
  basket: BasketType;
  addItem: (params: AddFoodType) => void;
  removeItem: (params: RemoveFoodType) => void;
  clearItem: (params: ClearFoodType) => void;
  clearBasket: () => void;
};

export enum ActionsEnum {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  CLEAR_ITEM = "CLEAR_ITEM",
  CLEAR_BASKET = "CLEAR_BASKET",
}

export type ActionsType =
  | ({ type: ActionsEnum.ADD_ITEM } & AddFoodType)
  | ({ type: ActionsEnum.REMOVE_ITEM } & RemoveFoodType)
  | ({ type: ActionsEnum.CLEAR_ITEM } & ClearFoodType)
  | { type: ActionsEnum.CLEAR_BASKET };

export type BasketItemType = {
  data: FoodType;
  quantity: number;
  totalPrice: number;
};
