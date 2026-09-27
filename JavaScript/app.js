console.log("Hello, MR: Huzaifa");
// Basic Types
// 1 String Type
// 2 Number Type
// 3 Object Type
// 4 Array Type
// 5 Literal Type
// 6 Function Type
// 7 Tupple Type
//String//
const name = "Huzaifa Amin";
console.log(name);
//Number//
const myAge = 21;
console.log(myAge);
//object//
const userDetails = {
    name: "huzaifa",
    age: 12
};
console.log(userDetails);
//Array
const FruitsName = ["Apple", "Banana", "Avacado"];
console.log(FruitsName);
FruitsName.push("Grapes");
console.log(FruitsName);
//Literal Type
let response = true;
console.log(typeof response);
console.log(response);
response = "Huzaifa";
console.log(typeof response);
console.log(response);
response = 12;
console.log(typeof response);
console.log(response);
//function Type
const sum = (num1, num2) => num1 + num2;
let result = sum(1, 3);
console.log(result);
function sumOfNumber(num1, num2) {
    const result = num1 + num2;
    console.log(result);
}
sumOfNumber(8, 8);
//Tuple//
let unknown = [10298, "Huzaifa", true];
console.log(typeof unknown);
console.log(unknown);
export {};
