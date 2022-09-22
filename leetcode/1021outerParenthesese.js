/*

A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

    For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

 
*/

var removeOuterParentheses = function(s) {
    // loop through the string and add 1 to a number if s[i] is '('
    // remove 1 if s[i] is ')'
    // if counter is 0 then assign substring to output string and move on
    let bal = 0;
    let index = 0;
    let result = '';
    let start = 0;
    for (let char of s) {
        if (char === '(') bal++;
        if (char === ')') bal--;
        if (bal === 0) {
            result += s.slice(start + 1, index);
            start = index + 1;
        }
        index++;
    }
    return result;
};