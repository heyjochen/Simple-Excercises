function bubbleSort (arr) {
    for (let i=0; i < arr.length; ++i) {
        for (let j=0; j < arr.length - 1 - i ; ++j) {
            if (arr[j+1] < arr[j]) {
                let tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j + 1] = tmp
            }
        }
    }
return arr  
}

console.log(bubbleSort([1,4,2,5,3]))
