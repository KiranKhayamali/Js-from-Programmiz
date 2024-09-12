const checkPrime =(num) =>{
    if (num<2) return false;  
    for(let i =2; i<num; i++){
        if(num%i ===0) return false;
    }
    return true;
}

for (let number = 50; number <=100; number++){
    let isPrime = checkPrime(number);
    if (isPrime) console.log(`${number} is a Prime Number.`)
    else console.log(`${number} isnot a Prime Number.`)
}