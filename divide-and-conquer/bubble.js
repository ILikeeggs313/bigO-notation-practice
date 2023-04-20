//sorting
function bubbleSort(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        let swapped = false;
        for(let j = 0; j < arr.length - i; j++){
            count ++;
            if(arr[j] < arr[j+1]){
                let temp = arr[j];
                arr[j]= arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    console.log("TOTAL COUNT:", count);
    return arr;
}

//[34,5,6,2,1,99,30]

//implementing merge function first
//merging arrays
function merge(arr1, arr2){
    const results = [];
    let i = 0;
    let j = 0;
    while(i< arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            results.push(arr1[i]);
            i++ 
        }  else{
            results.push(arr2[j]);
            j++
        }
    }
    while(i < arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        results.push(arr2[j]);
        j++;
    }
    return results;
    //we need to repeat the process as long as i/j pointers still true
}

function mergeSort(arr){
    //base case
    if(arr.length <= 1) return arr;
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(left, right);
    //typical case

}

//INSERTION METHOD
function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let currentValue = arr[i];
  
      for (let j = i - 1; j > -1 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j];
      }
  
      arr[j + 1] = currentValue;
    }
  
    return arr;
  }

//SELECTION SORT
function selectionSort(arr) {
    const swap = (arr, idx1, idx2) =>
      ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  
    for (let i = 0; i < arr.length; i++) {
      let lowest = i;
  
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[lowest] > arr[j]) {
          lowest = j;
        }
      }
  
      if (i !== lowest) swap(arr, i, lowest);
    }
  
    return arr;
  }
//PIVOT
function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
  }


//quick sort
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
        }
    return arr;
}

//radixt
function getDigit(num, i) {
    //we first need to get the digit we want to count get them in an ascending order
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
  
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  function mostDigits(nums) {
      //which ever digit is the highest, will be placed 1st.
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
  
  function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
      let digitBuckets = Array.from({ length: 10 }, () => []);
      for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let digit = getDigit(num, k);
        digitBuckets[digit].push(num);
      }
      nums = [].concat(...digitBuckets);
    }
    return nums;
  }