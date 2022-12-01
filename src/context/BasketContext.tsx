import { createContext, ReactNode, useCallback, useContext, useMemo, useReducer } from "react";

import offerData from "../services/mockDiscount";
import { BasketType, BasketContextType, ActionsType, ActionsEnum, FoodsType } from "../types.d";

import calculateDiscount from "../utils/calculateDiscount";

const BasketContext = createContext<BasketContextType>({
  basket: {},
  addItem: () => null,
  removeItem: () => null,
  clearItem: () => null,
  clearBasket: () => null
});

const basketReducer = (state: BasketType, action: ActionsType): BasketType => {
  switch (action.type) {
    case ActionsEnum.ADD_ITEM:
      return {
        ...state,
        [action.uuid]: (state[action.uuid] ?? 0) + (action.quantity ?? 1)
      };
    case ActionsEnum.REMOVE_ITEM:
      const newState = {
        ...state,
        [action.uuid]: (state[action.uuid] ?? 0) - (action.quantity ?? 1)
      };
      if (newState[action.uuid] <= 0) {
        delete newState[action.uuid];
      }
      return newState;
    case ActionsEnum.CLEAR_ITEM:
      const copy = { ...state };
      delete copy[action.uuid];
      return copy;
    case ActionsEnum.CLEAR_BASKET:
      return {};
    default:
      return state;
  }
};

export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basket, dispatch] = useReducer(basketReducer, {});

  const addItem = useCallback<BasketContextType["addItem"]>(
    (params) => {
      dispatch({ type: ActionsEnum.ADD_ITEM, ...params });
    },
    [dispatch]
  );

  const removeItem = useCallback<BasketContextType["removeItem"]>(
    (params) => {
      dispatch({ type: ActionsEnum.REMOVE_ITEM, ...params });
    },
    [dispatch]
  );

  const clearItem = useCallback<BasketContextType["clearItem"]>(
    (params) => {
      dispatch({ type: ActionsEnum.CLEAR_ITEM, ...params });
    },
    [dispatch]
  );

  const clearBasket = useCallback<BasketContextType["clearBasket"]>(() => {
    dispatch({ type: ActionsEnum.CLEAR_BASKET });
  }, [dispatch]);

  return (
    <BasketContext.Provider value={{ basket, addItem, removeItem, clearItem, clearBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  return useContext(BasketContext);
};

export const useBasketProducts = (products: FoodsType) => {
  const { basket } = useBasket();

  const items = useMemo(() => {
    return Object.keys(basket).map((productId) => {
      const product = products[productId];
      const quantity = basket[productId];
      return {
        product,
        quantity,
        totalPrice: product.price * quantity
      };
    });
  }, [products, basket]);

  const quantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.totalPrice, 0);

  // Calculate discount
  const validOffers = offerData.map((discount) => calculateDiscount(discount, items)).filter((item) => item);
  const bestOffer = validOffers.reduce((best, offer) => {
    if (!best) {
      return offer;
    }

    if (offer.value > best.value) {
      return offer;
    }
  }, undefined);

  return { items, quantity, totalPrice, discount: bestOffer };
};
