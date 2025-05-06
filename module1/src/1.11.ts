{
    //

    // ternary operator || optional chaining || nullish coalescing

    const age : number = 35;
    if(age >= 18){
        console.log('Adult');
    }
    else{
        console.log('Not adult');
    }

    const isAdult = age >= 18 ? 'Adult' : 'Not Adult'
    // console.log({isAdult});



    // nullish coalescing operator, u need to add ?? double
    // taking decision depends on null or undefined
    // const isAuthenticated = undefined;
    // // looks same like ternary but not same.
    // const result1 = isAuthenticated ?? 'Guest'
    // const result2 = isAuthenticated ? isAuthenticated : 'Guest'
    // console.log({result1}, {result2});
    // output { result1: 'Guest' } { result2: 'Guest' }

    // example2
    const isAuthenticated = '';
    // nullish only works if its null or undefined, lets try with empty string.
    const result1 = isAuthenticated ?? 'Guest'
    const result2 = isAuthenticated ? isAuthenticated : 'Guest'
    console.log({result1}, {result2});
    // output : { result1: '' } { result2: 'Guest' } it returns empty string but result 2 is showing guest because we used ternary which works everywhere

    //  optional chaining.
    type User = {
        name : string;
        address : {
            city : string;
            road : string;
            preAddress : string;
            permAddress? : string
        }
    }

    const user : User = {
        name : 'Shawon',
        address : {
            city : 'Dhaka',
            road : '12',
            preAddress : 'Dhaka Bangladesh' 
        }
    };

    // const permanentAddress = user.address.permAddress;
    // console.log({permanentAddress})
    // output : undefined. 

    const permanentAddress = user?.address?.permAddress ?? 'Not mentioned';
    // now since the value is undefined or null we can use nullish to add a default value there.
    console.log({permanentAddress});
    // output : { permanentAddress: 'Not mentioned' };
}