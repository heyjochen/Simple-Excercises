/*
Minimum
Write a function min that takes two arguments and returns their minimum.
*/

let min = (num1,num2) => {
    return (num1 > num2) ? num2
    : (num1 < num2) ? num1
    : console.log (`${num1} equals ${num2}`);
}

min(2,3)
