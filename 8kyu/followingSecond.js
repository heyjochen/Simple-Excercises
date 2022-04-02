/* 
Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

This is not as simple as it seems... Look at the following results to see for yourself:

14h17m59s => 14h18m0s
6h59m59s => 7h0m0s
23h59m59s => 0h0m0s (midnight) 


// Pseudo Code // 
create const and prompt for time
create variable and extract the substrings for hour, minute and second

create if conditions

alert final time 



let hour = prompt('Give me an hour')
let minute = prompt('Give me a minute')
let second = prompt('Give me an second')

if hour > 23 || minute > 59 || second > 59
alert('This is not a correct time')


if hour === 23 && minute === 59 && second === 59
hour = 0 
minute = 0
second = 0

if hour < 23 && minute < 59 && second < 59 
second += 1

if hour < 23 && minute < 59 && second === 59
minute += 1
second = 0

if hour < 23 && minute === 59 && second === 59
hour += 1
minute = 0
second = 0



alert(`Your time one second after your input is ${hour}h${minute}m${second}s`)

*/
//Create constant timeFormat like 14h17m59s
const timeFormat = prompt('Give me a time in the following format 14h17m59s.\nDon\t forget the h after hours, the m after minutes and the s after seconds')

//Extract variables out of input
let hours = Number(timeFormat.substring(0, timeFormat.indexOf("h")))
let minutes = Number(timeFormat.substring(timeFormat.indexOf("h") + 1, timeFormat.indexOf("m")))
let seconds = Number(timeFormat.substring(timeFormat.indexOf("m") + 1, timeFormat.indexOf("s")))

//Create function
function updateTimeFormat (){

    if (hours === 23 && minutes === 59 && seconds === 59) {
        hours = 0 
        minutes = 0
        seconds = 0
    }

    else if (hours <= 23 && minutes <= 59 && seconds < 59) {
        seconds += 1
    }

    else if (hours <= 23 && minutes < 59 && seconds === 59) {
        minutes += 1
        seconds = 0        
    }

    else if (hours <= 23 && minutes === 59 && seconds === 59) {
        hours += 1
        minutes = 0
        seconds = 0
    }

    else {
        alert('This is not the correct input')
    }

    console.log(`${hours}h${minutes}m${seconds}s`)    
}

updateTimeFormat()

