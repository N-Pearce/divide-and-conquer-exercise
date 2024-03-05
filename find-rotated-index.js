function findRotatedIndex(arr, val) {
    let pivotIdx = findPivot(arr)
    // if on the heavy side of the array
    if (val >= arr[0]){
        // search heavy side of array
        return binarySearch(arr, val, 0, pivotIdx)
    } else{
        //search light side of array
        return binarySearch(arr, val, pivotIdx+1, arr.length - 1)
    }
}

function binarySearch(arr, val, left, right){
    if (left > right)
        return -1

    mid = Math.floor((left+right) / 2)
    if (arr[mid] === val){
        return mid
    }
    if (arr[mid] > val)
        return binarySearch(arr, val, left, mid-1)
    if (arr[mid] < val)
        return binarySearch(arr, val, mid+1, right)
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

// function findPivot(arr){
//     let leftIdx = 0
//     let rightIdx = arr.length - 1

//     while (leftIdx <= rightIdx){
//         mid = Math.floor((leftIdx + rightIdx) / 2)
        
//         if (arr[mid] > arr[mid+1]){
//             return mid
//         }
//         else if (arr[leftIdx] > arr[mid])
//             leftIdx = mid + 1
//         else
//             rightIdx = mid - 1
//     }
//     return leftIdx
// }

module.exports = findRotatedIndex