/* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height. */

// 8 rows and 8 colums
// first row starts with empty space
// second row starts with octathorpe
// third row starts with empty space
// first row for loop 0 to 7 starting with empty and then adding octathorpe
// second row for loop 0 to 7 starting with octathorpe and then adding empty space
// that means we need a loop inside a loop
// create a loop for the row that has a loop for the column

let rows = ''
let columns = ''
for (let i = 0; i < 7; i++) {
    
}