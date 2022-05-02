/*

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089

*/

//P: ip address as string
//R: true or false
//E: 1.2.3.4.5  invalid
//P: split the string into an array, then check if the length is only 4 and the elements are all between 0 and 255

function isValidIP(str) {
    const IP = str.split('.')
    return (IP.length === 4) ? IP.every(e => e > 0 && e < 255) : false
    }