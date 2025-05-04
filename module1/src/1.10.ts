{
//
// union and intersection types which is || or in js
//  || in js 
// union types 
// type FrontEndDeveloper = 'not Good' | 'Junior Developer'
// type FullStackDeveloper = 'front end developer' | 'Expert Developer'

// const newDeveloper : FrontEndDeveloper = 'Junior Developer';

// // type declare
// type Developer = FrontEndDeveloper | FullStackDeveloper

// type User = {
//     name : string;
//     email : string;
//     gender : "Male" | 'Female';
//     bloodGroup : 'O+' | 'A+' | 'B+'
// }

// // define union types
// const user1 : User = {
//     name : 'shawon',
//     email : 'shawonkn58@gmail.com',
//     gender : "Male" ,
//     bloodGroup : 'O+'
// }




// intersection type which is && in js
type FrontEndDeveloper = {
    skills : string[];
    designation1 : 'Front End Developer'
}
type BackEndDeveloper = {
    skills : string[];
    designation2 : 'Backend Developer'
}

type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper

const fullStackDeveloper : FullStackDeveloper = {
    skills : ['html', 'css', 'express'],
    designation1 : 'Front End Developer',
    designation2 : 'Backend Developer'
}













//
}