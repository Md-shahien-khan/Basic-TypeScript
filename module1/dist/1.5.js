"use strict";
// Reference type --> object
// implicit
// const user = {
//     firstName:'Shahien',
//     middleName:'Khan',
//     lastName:'shawon'
// } lets make it explicit
// const user : {
//     firstName : string;
//     middleName : string;
//     lastName : string
// } 
// = 
// {
//     firstName:'Shahien',
//     middleName:'Khan',
//     lastName:'shawon'
// }
// when u mentioned 
// const user : {
//     firstName : string;
//     middleName : string;
//     lastName : string
// } 
// = 
// {
//     firstName:'Shahien',
// 
//     lastName:'shawon'
// }
// but not the middle name it will show an error because you have mentioned that u need to add f,m,l name
// if u want to remove the error add optional type ? like optional chaining in js
const user = {
    company: 'Nandos',
    firstName: 'Shahien',
    lastName: 'shawon',
    isMarried: true
};
// user.company= Cannot assign to 'company' because it is a read-only property. u cant change
