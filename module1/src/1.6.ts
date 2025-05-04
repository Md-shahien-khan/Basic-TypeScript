{// function
// normal function
// arrow function

// function add(num1, num2){
//     return num1 + num2;
    // Parameter 'num1' implicitly has an 'any' type. so u can anything. but still u need add the type
// function add(num1 : number, num2 : number ):number{
//     return num1 + num2;
// };

// you can add default values
function add(num1 : number, num2 : number = 10 ):number{
    return num1 + num2;
};
// add(2, true);Argument of type 'boolean' is not assignable to parameter of type 'number'.
add(2,10);


// Arrow function
const addArrow = (number1 : number, number2 : number) : number => number1 + number2;


// when we write a function in object we call them method
const postUser = {
    name : "kanij",
    balance : 0,
    // addBalance(balance:number) : number{
    //     return this.balance + balance;
    // }
    // if u want to return a string value
    addBalance(balance:number) : string{
        return `my new balance ${this.balance + balance}`;
    }
    // because my return type is string.
};


const arr : number [] = [1, 4, 10]

const newArray : number[] = arr.map((elem : number) : number => elem * elem)
// they will return a number.u can explicit way define it number.
}