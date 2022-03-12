/* Following second
Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

This is not as simple as it seems... Look at the following results to see for yourself:

14h17m59s => 14h18m0s
6h59m59s => 7h0m0s
23h59m59s => 0h0m0s (midnight) */


/*
create variable and prompt for a an hour
create variable and prompt for a minute
create variable and prompt for a second

create if conditions

alert final time 


// Code // 

let hour = prompt('Give me an hour')
let minute = prompt('Give me a minute')
let second = prompt('Give me an second')

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

if hour > 23 || minute > 59 || second > 59
alert('This is not a correct time')


alert(`Your time one second after your input is ${hour}h${minute}m${second}s`)
