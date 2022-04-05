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

/*

THOUGHTS

- If we look at the chessboard having column and rows, we can see a pattern. If column + row is even, we have a space. If column + row is odd, we see an octathorpe.
- From there we need two for loops: The first one will create a row, the second one will create the columns and has to be nested inside the first. 
- Both for loops start at 1 and go to <= 7, with the second one introducing a new line after it runs.

PSEUDOCODE

//P: size of the chessboard as a number
//R: a whole chessboard with rows and columns, empty spaces and octathorpes
//E:  # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
//P: Look at the chessboard and recognize a pattern, row + column % 2 === 0 then we print a space, else we print a octathorpe
//P: We know we need two loops one prints the row, one prints the column which is nested in the first loop
//P: We need a chessboard variable that is empty, and we need to declare the octathorpe variable with a octathorpe as string value
 
*/
let chessboard = ''
let octathorpe = '#'
function makeChessboard(size) {
    for (let row = 1; row <= size; row++) {
        for (let column = 1; column <= size; column++) {
            if ((row+column) % 2 === 0) {
                chessboard += ' '
            } else {chessboard += octathorpe}
        } chessboard += '\n'
    }
    console.log(chessboard)
}
makeChessboard(8)
