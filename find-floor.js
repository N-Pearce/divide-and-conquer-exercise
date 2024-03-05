function findFloor(arr, val) {
    let leftIdx = 0
    let rightIdx = arr.length-1

    // checks for none or all 0s
    if (arr[leftIdx] > val)
        return -1;
    if (arr[rightIdx] < val)
        return arr[rightIdx]

    while (leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[middleIdx] < val && arr[middleIdx+1] > val)
            return arr[middleIdx]
        else if (arr[middleIdx] > val && arr[middleIdx+1] > val)
            rightIdx = middleIdx
        else
            leftIdx = middleIdx
    }
}

module.exports = findFloor