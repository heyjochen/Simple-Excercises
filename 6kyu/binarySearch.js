function binS(arr, val) {
    let lo = 0
    let hi = arr.length

    while (lo < hi) {
        let mid = Math.floor(lo + (hi - lo) / 2)
        if (val < arr[mid]) {
            hi = mid
        } else {
            lo = mid + 1
        }
    return mid
    }
}

console.log(binS([1,3,8,9,12,19], 9))
