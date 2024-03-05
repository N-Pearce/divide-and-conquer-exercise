function countZeroes(arr) {
    let leftIdx = 0
    let rightIdx = arr.length-1

    // checks for none or all 0s
    if (arr[leftIdx] === 0)
        return arr.length;
    if (arr[rightIdx] === 1)
        return 0;

    while (leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[middleIdx] === 1 && arr[middleIdx+1] === 0)
            return arr.length - middleIdx - 1;
        else if (arr[middleIdx] === 1 && arr[middleIdx+1] === 1)
            leftIdx = middleIdx
        else
            rightIdx = middleIdx
    }
}

module.exports = countZeroes