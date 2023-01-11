const arr = [1,4,3,2,8,7]

function bubble_sort(arr){
    for (let i = 0; i < arr.length - 1; ++i) {
        for (let j = 0; j < arr.length - i - 1; ++j) {
            if (arr[j + 1] < arr[j]) {
                const tmp = arr[j]
                arr[j] = arr[j + 1] 
                arr[j + 1] = tmp
            }
        } 
    }
    return arr
}
console.log(bubble_sort(arr))
