/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
dnaStrand []        `shouldBe` []
dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]
*/

//P: string or arr as input
//R: switched string, A to T, T to A, G to C, C to G
//E: dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
//P: split(''), for each, switch case 

function DNAStrand(dna){
    dna.split('').map(e=> {
        switch(e){
            case A: return T
            case T: return A
            case G: return C
            case C: return G 
        }
        
    });
    return dna
  }