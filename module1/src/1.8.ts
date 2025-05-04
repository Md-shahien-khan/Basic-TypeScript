// destructuring
const person = { 
    id: 234,
    name : {
        firstName : 'Shahien',
        middleName : 'Khan',
        lastName : 'Shawon'
    },
    contactNo : "01794627234",
    address : 'Bangladesh'
};

const {contactNo, 
    name: {middleName : midName}   //name alias
} = person;


// array destructing 
const myFriends = ['dolan', 'karim', 'lasa', 'Anan', 'kanij', 'phillip']
// const [a, b, c] = myFriends;
// lets say u don't want to destructure the a or b u can skip
const [,, c, ...rest] = myFriends;
// c = lasa;
// after lasa all of them are in rest.


