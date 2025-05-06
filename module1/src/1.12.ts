// types
{
    // nullable types
    // const searchName = (value : string) =>{
    //     if(value){
    //         console.log('Searching')
    //     }
    //     else{
    //         console.log('There is nothing to search');
    //     }
    // };
    // searchName(null); Argument of type 'null' is not assignable to parameter of type 'string'


    const searchName = (value : string | null) =>{
        if(value){
            console.log('Searching')
        }
        else{
            console.log('There is nothing to search');
        }
    };
    searchName(null);


    // unknown types 
    // const getSpeedInMeterPerSecond = (value : unknown) =>{
    //     if(typeof value === 'number'){
    //         const convertedSpeed = (value * 1000) / 3600;
    //         console.log(`the speed is ${convertedSpeed} ms-1`);
    //     }
    // };
    // getSpeedInMeterPerSecond(1000);  now will do one thing we wont send number every time
    // lets do with string 
    const getSpeedInMeterPerSecond = (value : unknown) =>{
        if(typeof value === 'number'){
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`the speed is ${convertedSpeed} ms-1`);
        }
        else if(typeof value === 'string'){
            // lets spilt it
            // const valueInNumber = value.split(' ');
            // it will separate 10000 and ms-1
            // console.log(valueInNumber); output 10000 and ms-1
            // let's destructure it
            const [result, unit] = value.split(' ');
            // console.log(result);
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`the speed is ${convertedSpeed} ms-1`);
        }
        else{
            console.log('Wrong input.')
        }
    };
    
    // getSpeedInMeterPerSecond(`10000 ms-1`) //let's break it
    // lets send null
    getSpeedInMeterPerSecond(null);  // will show wrong input;



    // never, this will never return anything 
    // const throwError = (msg : string) =>{ it shows const throwError: (msg: string) => never so we can explicit never
        const throwError = (msg : string) : never =>{
        throw new Error(msg);
    };

    throwError('there is an error');
}