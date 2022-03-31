/*

Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"

*/

// P: number that equals the age
// R: return what they are drinking
// E: 13 --> "drink toddy"
// P: I am using the ternary op

function peopleWithAgeDrink(age) {

    return (age < 14) ? 'drink toddy' 
    : (age < 18) ? 'drink coke' 
    : (age < 21) ? 'drink beer' 
    : 'drink whisky' 

}
//write as arrow function with implicit return
const peopleWithAgeDrink = (age) =>
  age < 14 ? "drink toddy" :
  age < 18 ? "drink coke" :
  age < 21 ? "drink beer" : "drink whisky"