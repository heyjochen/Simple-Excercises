let fizzBizzle = () => {
    for (let i = 1; i < 101; i++) {
        (i % 15 === 0) ? console.log('Fizzbizzle') 
        : (i % 5 === 0) ? console.log('Bizzle') 
        : (i % 3 === 0) ? console.log('Fizz') 
        : console.log(i) ;
    }
}
fizzBizzle()