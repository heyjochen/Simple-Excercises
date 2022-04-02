//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

//with forEach
function arrayNumbers (arr) {
    let product = 1
    arr.forEach ((element) => product *= element )
    alert(product) 
}
arrayNumbers(['1','2','3','4'])

// with for loop
function arrayNumbers (arr) {
    let product = 1
    
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i]
    }
    alert(product) 
}
arrayNumbers(['1','2','3','4'])
































// With forEach
function productArray (arr) {
    let product = 1
    arr.forEach( (element) => {
        product *= element
    })
    alert(product)
}
productArray(['1','2','3','4'])


// With for loop
function productArray (arr) {
    let product = 1
    for (let i=0 ; i < arr.length; i++) {
        product *= arr[i] 
    }
    alert(product)
}
productArray(['1','2','3','4'])

