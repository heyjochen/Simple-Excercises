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

create variable board = ' '
create variable size = 8
create for loop (let i = 1; i <=  size; i++)
    create nested for loop (let j = 1: j <= size; j++)
    if (i+j % 2 === 0) {
        board += ' '
    } else { board += '#' }
} board += '\n'
console.log(board)

*/
let board = ''
let size = 8

for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
        if ((i+j) % 2 === 0){
            board += ' '
        } else { 
            board += '#'
        }
    } 
    board += '\n'
}
console.log(board)