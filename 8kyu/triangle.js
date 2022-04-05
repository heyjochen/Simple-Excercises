/* 
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.
*/

//P: number of rows
//R: triangle
//E: see above
//P: create a variable for octathorpe, create while loop, add octathorpe to triangle, introduce new line


let octathorpe = ''
function makeTriangle(num) {
    while (octathorpe.length <= num) {
        console.log(octathorpe)
        octathorpe += '#'    
    }

}
makeTriangle(4)















let octothorpe = ''
for (let i = 0; i < 7; i++) {
octothorpe += '#'
console.log(octothorpe)
}
