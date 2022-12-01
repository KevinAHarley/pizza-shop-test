# Pizza Shop

## Run project

Clone the project

Install dependencies
`yarn`

Run the project using web, ios or Android. Web is the quickest way to get off the ground
`yarn web`
`yarn ios`
`yarn android`

## Discounts

Discount definitions can be found in the services/mockDiscount.ts file.
The "best" discount is automatically shown on basket screen.

| **Key**             | **Description**                                                                | **Required** |
| ------------------- | ------------------------------------------------------------------------------ | ------------ |
| uuid                | Unique uuid4 ID representing the discount                                      | Y            |
| description         | Verbose description of the discount                                            | Y            |
| discountDay         | 0,1,2,3,4,5,6 - The day of the week a discount is applicable (starting Sunday) | N            |
| discountCategory    | The "type" this discount can be used on                                        | N            |
| name                | The display name of the discount                                               | Y            |
| discountMinRequired | The number of matching items before a discount can be applied                  | Y            |

## Menu

Menu items can be found in the services/mockDiscounts.ts file. Adding to this list should automatically list them on the MenuScreen

## Assumptions

- 1 discount per order

## Improvements

- Add missing types
- Add information for line item discounts
- Add component and screen unit tests
- Separate Discounts storage and business logic into separate context
- Add support for a selectable discount, rather than it being auto selected
- Use persistent storage for refresh support
- Add a ScrollView to the MenuScreen to support larger menus
