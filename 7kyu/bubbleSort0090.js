const arr = [2,1,5,3,6,4]

function bubble_sort(array){
    for (let i=0; i < arr.length - 1; ++i) {
        for (let j=0; j < arr.length - 1 - i; ++j) {
            if (arr[j + 1] < arr[j]) {
                const temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
console.log(bubble_sort(arr))
