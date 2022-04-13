/*

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"

*/

//P: string
//R: modified string that covers all but the last four character with an octathorpe
//E: "4556364607935616" --> "############5616"
//P: grab length of string, if string length <=4 then return string, else make a variable octathorpes that repeats octathorpe by string.length-4, concatenate with cc.slice(-4)

// return masked string
function maskify(cc) {
    const length = cc.length;
    if (length <= 4) return cc
    else {
        let octathorpe = '#'
        octathorpe = octathorpe.repeat(length-4)
        let covered = cc.slice(-4)
        return octathorpe+covered
    }
}
maskify('4556364607935616')

// easier would be to use the padStart() method
function maskify(cc) {
    return cc.slice(-4).padStart(cc.length,'#')
}