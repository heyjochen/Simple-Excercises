/*

Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'

*/

//P: string of letter a,b,c
//R: string with a and b switched
//E: 'aabacbaa' --> 'bbabcabb'
//P: split, forEach with conditional


const switcheroo = x =>  x.split('').map(e => {
    return (e === 'a') ? 'b' : (e === 'b') ? 'a' : e ;
}).join('')
