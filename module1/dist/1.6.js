"use strict";
// function
// normal function
// arrow function
// function add(num1, num2){
//     return num1 + num2;
// Parameter 'num1' implicitly has an 'any' type. so u can anything. but still u need add the type
function add(num1, num2) {
    return num1 + num2;
}
;
// add(2, true);Argument of type 'boolean' is not assignable to parameter of type 'number'.
add(2, 10);
