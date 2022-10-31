# README
Congratulations on reaching this stage of our application process and thank you for taking the time to do our tech test! 🍕 🎉


### Expectations
Please think carefully about each aspect of the problem and define a solution that fits the requirements listed. Ideally answers should be written in Typescript (Javascript is also fine). You may also make use of any frameworks as desired. A complete solution to the problem is not required and a UI is not expected.

Please create a document of what assumptions and considerations you have made, and also what you would have done differently had it been a production app.

As a guide this test should take approximately 3 hours, it is designed to be challenging and there are lots of ways to approach it. It's ok to spend more time on it but we don't want to take up an excessive amount of your time. If you don't have time to complete everything you'd like to, feel free to submit a partial solution with a summary of how you'd tackle the outstanding aspects. It won't count against you, we're aware that varying circumstances can make finding time for recruitment exercises tricky.

The code we have provided is just a Typescript/Javascript starting point. Feel free to add your own packages and amend the structure as needed. An example Typescript function and test can be found in the src/examples directory.

### Your Task

A pizzeria requires a new ordering system to be used in their new app. There are currently three types of pizzas:
- Small: £8.99
- Medium: £10.99
- Large: £12.99

In addition, there are currently a few sides which can be added to an order.
- Potato Wedges: £3.40
- Herb Garlic dip: £0.80

The pizzeria would also like to have special offers that are applied automatically at checkout. A specific offer they would like to include from the start is:
- Three for One Tuesdays (buy one pizza, get two free for pizzas purchased on Tuesdays)

Your task is to implement a checkout system that can calculate the total cost of any combination of pizzas and sides that a user might buy using the app.

Please bear in mind:
- Pizzas and sides can be added in any order
- Offers should always be applied if possible
- The checkout should be able to calculate how much the customer has saved when offers have been applied
- The prices of the products are subject to change, new products may also be added
- New types of offers may need to be added in the future


### Getting Started
Node Version:
```
v16.13.1
```

Install dependencies:
```shell
npm install
```


### Testing
This project uses [ts-jest](https://github.com/kulshekhar/ts-jest) which lets you use [Jest](https://jestjs.io/docs/getting-started) to test projects written in TypeScript.

Run all tests in watch mode:
```shell
npm test
```
