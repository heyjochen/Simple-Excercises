/*

You are given array of integers, your task will be to count all pairs in that array and return their count.
[1, 2, 5, 6, 5, 2]  -->  2
Notes:

Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
Examples

...because there are 2 pairs: 2 and 5

[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again)

*/

//P: array
//R: return amount of pairs
//E: [1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
//P: sort and compare e[i] to e[i+1], if the same add 1 to the counter


//sort and loop
function duplicates(array){

    const newArray = array.sort((a,b) => a-b);
    if (newArray.length <= 1) return 0;

    let count = 0;

    for (let i = 0; i < newArray.length ; i++) {
        if (newArray[i] == newArray[i+1]) {
        count++;
        i++;
        }
    }
    return count;
}

//new empty set and delete
function duplicates(array) {
    let res = 0, odd = new Set();
    for (let x of array) {
        if (odd.delete(x))
        res++;
        else
        odd.add(x);
    }
    return res;
}