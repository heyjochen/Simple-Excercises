/*

Simple loop excercises

*/

//Example 1: Return sum of numbers from 1 to 10
let sum = 0
for (let i=0; i<=10; i++) {
    sum += i
} console.log(sum)

//Example 2: Console log even numbers from m to n
let m = 10
let n = 20

for (let i=m; i<=n; i+=2){
    console.log(i)
}

/*
For In
*/

// Display salaries and values with a dollar sign in front of salaries
const salaries= {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
}
for (let key in salaries) {
    console.log(`${key} : $${salaries[key]}`)
}

// add a currency symbol
let salary = "$" + salaries[i];

// display the values
console.log(`${i} : ${salary}`);


// Display following output

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"

let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(`obj.${key} = ${obj[key]}`)
}


//let’s output all properties of user:
let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };


/*
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
  // after the call
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };
*/

function multiplyNumeric(obj) {
    for (let key in menu) {
        if (typeof menu[key] === 'number') {
            menu[key] *= 2
        }
    }
    return menu
}



/*
Sum object properties
importance: 5
We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.
*/


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = 0

for (let key in salaries ) {
    sum += salaries[key]
}
console.log(sum)