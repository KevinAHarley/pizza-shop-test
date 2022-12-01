import calculateDiscount from "./calculateDiscount";

const discount = {
  uuid: "d26bcbcb-dc6b-4118-a24d-1483313369c7",
  name: "Three for One Tuesdays",
  description: "Buy one Pizza, get two free!",
  discountDay: new Date().getDay(),
  discountCategory: "PIZZA",
  discountMinRequired: 3,
  numberOfItemsToDiscount: 2
};

const result = { uuid: "d26bcbcb-dc6b-4118-a24d-1483313369c7", name: "Three for One Tuesdays", value: 20 };

describe("calculateDiscount", () => {
  it("should return false if discountDay is set and today is not that day", () => {
    const discountWrongDay = {
      uuid: "d26bcbcb-dc6b-4118-a24d-1483313369c7",
      name: "Three for One Tuesdays",
      description: "Buy one Pizza, get two free!",
      discountDay: new Date().getDay() - 1,
      discountCategory: "PIZZA",
      discountMinRequired: 3,
      numberOfItemsToDiscount: 2
    };

    const items = [
      {
        product: {
          name: "Pizza",
          type: "PIZZA",
          price: 10
        },
        quantity: 3
      }
    ];

    expect(calculateDiscount(discountWrongDay, items)).toBe(false);
  });

  it("should return false if discountCategory is set and there are not enough items", () => {
    const items = [
      {
        product: {
          name: "Pizza",
          type: "PIZZA",
          price: 10
        },
        quantity: 2
      }
    ];

    expect(calculateDiscount(discount, items)).toBe(false);
  });

  it("should return the correct discount value if discountCategory is set and there are enough items", () => {
    const items = [
      {
        product: {
          name: "Pizza",
          type: "PIZZA",
          price: 10
        },
        quantity: 3
      }
    ];

    expect(calculateDiscount(discount, items)).toEqual(result);
  });

  it("should return the correct discount value if discountCategory is set and there are more items than needed", () => {
    const discount = {
      uuid: "d26bcbcb-dc6b-4118-a24d-1483313369c7",
      name: "Three for One Tuesdays",
      description: "Buy one Pizza, get two free!",
      discountDay: new Date().getDay(),
      discountCategory: "PIZZA",
      discountMinRequired: 3,
      numberOfItemsToDiscount: 2
    };

    const items = [
      {
        product: {
          name: "Pizza",
          type: "PIZZA",
          price: 10
        },
        quantity: 4
      }
    ];

    expect(calculateDiscount(discount, items)).toEqual(result);
  });

  it("should return the correct discount value if discountCategory is set and there are more items than needed", () => {
    const items = [
      {
        product: {
          name: "Pizza",
          type: "PIZZA",
          price: 10
        },
        quantity: 4
      }
    ];

    expect(calculateDiscount(discount, items)).toEqual(result);
  });
});
