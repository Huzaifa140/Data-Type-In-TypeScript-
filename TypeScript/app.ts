console.log ("Hello, MR: Huzaifa");
// Basic Types
// 1 String Type
// 2 Number Type
// 3 Object Type
// 4 Array Type
// 5 Literal Type
// 6 Function Type
// 7 Tupple Type

//String//
const name :string="Huzaifa Amin"
console.log(name);

//Number//
const myAge :number=21
console.log(myAge);

//object//
const userDetails :object={ 
    name :"huzaifa",
    age:12
}
 console.log(userDetails);
 
 
//Array
const FruitsName :string[]=["Apple","Banana" ,"Avacado"]
console.log(FruitsName);

FruitsName.push("Grapes")
console.log(FruitsName);

//Literal Type

let response :number | string | boolean =true;
console.log(typeof response);
console.log(response);
response="Huzaifa"
console.log(typeof response);
console.log(response);
response=12
console.log(typeof response);
console.log(response);

//function Type

const sum =(num1 :number, num2 :number) :number=> num1+num2;

let result=sum(1,3)
console.log(result);

function sumOfNumber(num1 :number, num2 :number){
    const result=num1+num2
    console.log(result);    
}
sumOfNumber(8,8)

//Tuple//
let unknown :[number , string ,boolean] =[10298 , "Huzaifa" ,true]
console.log(typeof unknown);

console.log(unknown);
