//Task 1 - If Statements
let purchaseAmount = 1000;
let finalAmount = purchaseAmount > 100 ? purchaseAmount * 0.9 : purchaseAmount;
console.log(`Final amount after discount: $${finalAmount}`);


//Task 2 - For Loop
let sales = [120, 85, 200, 150, 90];
let totalSales = 0;
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
  }
console.log(`Total sales: $${totalSales}`);


//Task 3 - While Loop
let stock = 10;
for (let i = stock; i > 0; i--) {
    console.log(`Stock remaining: ${i - 1}`)
  };


//Task 4 - Do...While Loop
let responses = 0;
for (let i = responses; i < 3; i++) {
    responses++ 
    console.log(`Response count: ${responses}`)
  };


//Task 5 - For...In Loop
// Declare an object with properties: name, position, and salary
let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
  };
  for (let key in employee) {
    console.log(`${key}: ${employee[key]}`)
  };