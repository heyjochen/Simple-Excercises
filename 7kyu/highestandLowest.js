/* 
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/


//P: string of space entered numbers
//R: string of two numbers seperated by a single space and highest number first
//E: highAndLow("1 2 3 4 5");  // return "5 1"
//P: make array out of string, find lowest and highest and store in variable, return with template literal

function highAndLow(numbers){
    numbers =  numbers.split(' ')
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}   

highAndLow("1 2 3 4 5")