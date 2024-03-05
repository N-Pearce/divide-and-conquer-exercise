function findRotationCount(arr) {
    let pivotIdx = findPivot(arr)
    return pivotIdx + 1
}

function findPivot(arr){
    let leftIdx = 0
    let rightIdx = arr.length - 1

    while (leftIdx <= rightIdx){
        mid = Math.floor((leftIdx + rightIdx) / 2)
        
        if (arr[mid] > arr[mid+1])
            return mid
        else if (arr[mid] < arr[mid-1])
            return (mid-1);
        else if (arr[leftIdx] >= arr[mid])
            rightIdx = mid - 1
        else
            leftIdx = mid + 1
    }
    return -1
}

module.exports = findRotationCount