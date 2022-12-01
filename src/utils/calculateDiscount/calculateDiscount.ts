import { DiscountType } from "../../types";

const calculateDiscount = (discount: DiscountType, items) => {
  const day = new Date().getDay();

  if (discount.discountDay && day !== discount.discountDay) {
    return false;
  }

  if (discount.discountCategory) {
    const numberOfItems = items.reduce((count, { product, quantity }) => {
      if (product.type === discount.discountCategory) count += quantity;
      return count;
    }, 0);

    if (numberOfItems < discount.discountMinRequired) {
      return false;
    }
  }

  let discountedValue = 0;

  if (discount.numberOfItemsToDiscount) {
    let countRemainingToDiscount = discount.numberOfItemsToDiscount;

    items.forEach(({ product, quantity }) => {
      if (product.type !== discount.discountCategory) return;
      if (countRemainingToDiscount === 0) return;

      // If we have more items than we need to discount
      if (quantity >= countRemainingToDiscount) {
        discountedValue += product.price * countRemainingToDiscount;
        countRemainingToDiscount = 0;
      } else {
        discountedValue += product.price * quantity;
        countRemainingToDiscount -= quantity;
      }
    });
  }

  return {
    uuid: discount.uuid,
    name: discount.name,
    value: discountedValue
  };
};

export default calculateDiscount;
