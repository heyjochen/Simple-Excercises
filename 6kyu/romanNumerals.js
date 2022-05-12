/*
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
*/

//P: A roman numeral
//R: its value as a numeric deciaml integer
//E: The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
//P: split into an arrray, then remap characters to a number, then run through whole number array and look if e >= e+1 then return e[i]+e[i+1] otherwise e[i+1]-e[i] 

function solution (roman) {
    let year = 0
    const romanNumber = roman.split('').map(e => {
        switch (e) {
            case 'M': return 1000
            case 'D': return 500
            case 'C': return 100
            case 'L': return 50
            case 'X': return 10
            case 'V': return 5
            case 'I': return 1
        }
    })
    for (let i=0; i<romanNumber.length; i++){                      //loop through roman numeral array
        if(romanNumber[i] < romanNumber[i+1]){         //special condition when number in front is less valuable than the next numeral
          year += romanNumber[i+1] - romanNumber[i];  //subtract first element from second in these cases (IV, IX, XC, etc)
          i++;
        }else{
          year += romanNumber[i];                           //add all the rest that don't meet above condition
        }
      }
      return year;
}

