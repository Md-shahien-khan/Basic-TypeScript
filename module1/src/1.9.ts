{
// type alias

// we can leave a type 
type student = {
    name: string;
    age : number;
    gender : string;
    contactNo?: string;   //some people might not have
    address : string
}

// const student1: {
//     name: string;
//     age : number;
//     gender : string;
//     contactNo : string;
//     address : string
// } = {
//     name : 'shawon',
//     age : 50,
//     gender : 'Male',
//     contactNo : '0134212312312',
//     address : 'LDN'
// }

// now u don't have to mention the type every time

// u can add student

const student1: student = {
    name : 'shawon',
    age : 50,
    gender : 'Male',
    contactNo : '0134212312312',
    address : 'LDN'
}

const student2: student = {
    name : 'kanij',
    age : 30,
    gender : 'Male',
    address : 'LDN'
}

const student3: student = {
    name : 'kanij',
    age : 30,
    gender : 'Male',
    address : 'LDN'
};


type UserName = string
type isAdmin = boolean
const userName : UserName = 'Persian'
const isAdmin : isAdmin = true;


type Add = (num1 : number, num2 : number) => number;  // will return a number.

const add : Add = (num1, num2) => num1 + num2;









// 
}