// const numner1 = 30 look it says a error because you have added number1 var to other file. ts count it as a global. u can use { } to other file like ts.6.ts file user { and after}


// spread operator
// rest operator
// destructuring


// learn spread operator
const bros1 : string[] = ['Anan', 'kanij', 'Badhon']
const bros2 : string[] = ['shawon', 'lasa', 'karim']
// bros1.push(bros2);Argument of type 'string[]' is not assignable to parameter of type 'string' typescript find u the error because u sending the entire array not the values. so use spread operator
bros1.push(...bros2);

const mentor1 = {
    typeScript : 'Mezba',
    redux : 'Mir',
    dbms : 'Mizan'
}

const mentor2 = {
    prisma : 'Firoz',
    next : 'tanmoy',
    cloud : 'nahid'
}

const mentorList = {
    ...mentor1,
    ...mentor2
};



// rest operator
// rest take the elements and make a operator
// const greetFriends = (friend1 : string, friend2 : string, friend3 : string) =>{
//     console.log(`Hi ${friend1} ${friend2} ${friend3}`); 
// };

// greetFriends('kanij', 'shawon', 'badhon', 'sneha', 'shariq');
// for the other friend i don't have any other parameter 
// for that u can use rest operator to send all the names or numbers

const greetFriends = (...friends : string[]) =>{
    friends.forEach((friend : string) => console.log(`Hi ${friend}`))
};

greetFriends('kanij', 'shawon', 'badhon', 'sneha', 'shariq');