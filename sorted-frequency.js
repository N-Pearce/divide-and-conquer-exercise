function sortedFrequency(arr, val) {
    let firstValIdx = findFirst(arr, val)
    if (firstValIdx === -1) return -1;
    let lastValIdx = findLast(arr, val)
    return lastValIdx - firstValIdx + 1;
}

function findFirst(arr, val){
    let left = 0
    let right = arr.length-1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === val){
            if (arr[mid-1] !== val)
                return mid
            else
                right = mid
        } else if (arr[mid] < val)
            left = mid + 1
        else
            right = mid - 1

    }
    return -1
}

function findLast(arr, val){
    let left = 0
    let right = arr.length-1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === val){
            if (arr[mid+1] !== val){
                return mid
            }
            else
                left = mid
        } else if (arr[mid] < val)
            left = mid + 1
        else
            right = mid - 1

    }
    return -1
}

module.exports = sortedFrequency