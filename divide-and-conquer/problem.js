//countZeros
//given an array of 1s and 0s, return the number of zeros in the array

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0
function countZeroes(arr){
    //I will use filter for this, since it's mcuh faster
    return arr.filter(v => v === 0).length;
}
//the traditional way would be
function countZeroes2(arr){
    let i = 0;
    for (let k in arr){
        if(arr[k] === 0 && arr[k] === parseInt(arr[k], 10)){
            i +=1;
        }
    }
    return i;
}
//if we use divide and conquer, then we can take the average 
//we set the lowest num to 0, then highest to whatever the array length is

//2. sortedFrequency
function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr, num);
    if (firstIdx == -1) return firstIdx;
    let lastIdx = findLast(arr, num);
    return lastIdx - firstIdx + 1;
  }
  
  function findFirst(arr, num, low = 0, high = arr.length - 1) {
    
    if (high >= low) {
      let mid = Math.floor((low + high) / 2)
      if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
        return mid;
      } else if (num > arr[mid]) {
        return findFirst(arr, num, mid + 1, high)
      } else {
        return findFirst(arr, num, low, mid - 1)
      }
    }
    return -1
  }
  
  function findLast(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
      let mid = Math.floor((low + high) / 2)
      if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
        return mid;
      } else if (num < arr[mid]) {
        return findLast(arr, num, low, mid - 1)
      } else {
        return findLast(arr, num, mid + 1, high)
      }
    }
    return -1
  }

//3 findRotatedIndex
function findRotatedIndex(arr, val){
    for(let i = 0; i < arr.length; i++){
        //if found the value, return the index of the val
        if(arr[i] === val) return i;
    }
    //if no value found, return -1 
    return -1;
}

//4 findRotationCount
//we can start by implementing a binary search
function findRotationCount(arr, leftIdx = 0, rightIdx = arr.length - 1) {
    if (rightIdx < leftIdx) return 0;
    if (rightIdx === leftIdx) return low;
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
  
    // Check if element (mid+1) is minimum element.
    // Consider the cases like [3, 4, 5, 1, 2]
    if (middleIdx < rightIdx && arr[middleIdx + 1] < arr[middleIdx])
      return middleIdx + 1;
  
    // Check if mid itself is minimum element
    if (middleIdx > leftIdx && arr[middleIdx] < arr[middleIdx - 1]) {
      return middleIdx;
    }
  
    // Decide whether we need to go to left half or
    // right half
    if (arr[rightIdx] > arr[middleIdx]) {
      return findRotationCount(arr, leftIdx, middleIdx - 1);
    }
  
    return findRotationCount(arr, middleIdx + 1, rightIdx);
  }

//6 findFloor
function findFloor(arr, num, low = 0, high = arr.length - 1) {
    if (low > high) return -1;
    if (num >= arr[high]) return arr[high];
  
    let mid = Math.floor((low + high) / 2)
  
    if (arr[mid] === num) return arr[mid];
  
    if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
      return arr[mid - 1];
    }
  
    if (num < arr[mid]) {
      return findFloor(arr, num, low, mid - 1);
    }
  
    return findFloor(arr, num, mid + 1, high)
  }