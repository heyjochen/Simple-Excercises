/*

Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.

Notes:
return an empty array if your array is empty
arrays will only contain numbers so don't worry about checking that
Examples:
[1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]

[4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
                                       #  9+3 = 12  -->  2


*/

//P: array
//R: array with number incremented by index + 1, if double digit number return last number
//E: [4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
//   #  9+3 = 12  -->  2
//P: map through the array and add i+1 to each number, if number > 10 return +number.toString.slice(1), otherwise number

function incrementer(nums) { 
    return nums.map((e,i) => {
        return (e+(i+1) >= 10) ? +String(e+(i+1)).slice(1) : e+(i+1)
    })
}



// it is better to not convert a number to a string and make use of the modulus instead

function incrementer(num) { 
    return num.map((a,i) => (a+i+1)%10);
}