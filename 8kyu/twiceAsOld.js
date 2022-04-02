/*
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
*/

//P (fathers age, current age son)
//R How many years ago the father twice as old as son, or in how many years he will be twice as old
//E 36 - 7 is 22
//P the return becomes valid when fathers age -= 2*sons age

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return dadYearsOld -= 2*sonYearsOld
}