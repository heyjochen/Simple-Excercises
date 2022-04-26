/*

The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

*/

//P: an array with a list of pairs, integer for age, integer for handicap
//R: an array of string values either senior or open
//E: input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
//E: output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
//P: map

function openOrSenior(data){

    return data.map((e) => {
        return (e[0] >= 55 && e[1] > 7) ? "Senior" : "Open" 
    })

}

// We can write this in a more readable way using destructuring [age, handicap]

// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }