/*

Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

*/

//P: left side letters and powers w4, p3, b2, s1, right side m4,q3,d2,z1
//R: which side wins, Left side wins! ... right side or equal
//E: alphabetWar("zdqmwpbs"); //=> Let's fight again!
//P: We need some kind of counter, we compare string to left side or right side and either add or remove from counter


function alphabetWar(fight)
{
    let counter = 0 
    fight.split('').forEach(e => {
        switch(e) {
            case 'z' : counter -= 1
            break;
            case 'd' : counter -= 2
            break;
            case 'q' : counter -= 3
            break;
            case 'm' : counter -= 4
            break;
            case 's' : counter += 1
            break;
            case 'b' : counter += 2
            break;
            case 'p' : counter += 3
            break;
            case 'w' : counter += 4
            break;
        }
    })
        return counter < 0 ? "Left side wins!" : counter > 0 ? "Right side wins!" : "Let's fight again!";

}

alphabetWar("zdqmwpbs")




// or

function alphabetWar(fight) {
    let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
    let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
    return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}