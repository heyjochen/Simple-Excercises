/*
Create a constructor function Calculator that creates objects with 3 methods:

read() asks for two values using prompt and remembers them in object properties.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
For instance:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

function Calculator () {
    this.read = function() {
        this.value1 = +prompt('a?')
        this.value2 = +prompt('b?')
    }
    this.sum = function (){
        return this.value1 + this.value2
    }
    this.mul = function () {
        return this.value1 * this.value2
    }
}