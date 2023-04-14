//product number
//write a function that returns the product of an array of numbers
//product([2, 3, 4])   // 24
function product(nums, index = 0){
    if(index === nums.length) return 1;
    return nums[index] * product(nums, index + 1);
}
console.log(product([2,3,4]))

//longest word, return the length of the longest from the list of words
function longest(words, idx = 0, currentLongest = 0){
    if(idx === words.length) return currentLongest;
    //if not, count the longest words using math.max
    currentLongest = Math.max(words[idx].length, currentLongest);
    return longest(words, idx + 1, currentLongest);
}
console.log(longest(["hello", "hi", "hola"]));

//every other character
function everyOther(str, idx = 0, newStr = ""){
    //we just default a newStr, which we will create to be blank then add to it
    //if nothing exist in the idx return the newStr;
    if(idx >= str.length) return newStr;
    newStr += str[idx];
    //since it's every other character, we just return idx + 2
    return everyOther(str, idx + 2, newStr);
}
console.log(everyOther("hello"));

function isPalindrome(str, idx = 0){
    let leftIdx = idx;
    let rightIdx = str.length - idx - 1;
    if (leftIdx >= rightIdx) return true;
    if (str[leftIdx] !== str[rightIdx]) return false;
    return isPalindrome(str, idx + 1);
}

//find index, return the index of that string in the arr
function findIndex(words, idx = 0, idxCount = 0){
    //if no idsCount return 0
    if(idxCount === words.length) return -1;
    if(words[idxCount] === idx) return idx;
    return findIndex(words, idx, idxCount + 1);
}

//reverseString
function reverseString(str, idx = 0, newStr = ""){
    if (newStr.length === str.length) return newStr;
    newStr += str[str.length - 1 - idx];
    return revString(str, idx + 1, newStr);
}

//gather strings
function gatherStrings(){
    let stringArr = [];
    for (let key in obj) {
        if (typeof obj[key] === "string") stringArr.push(obj[key]);
        if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
    }
    return stringArr;
}

//further study, binarySearch
function binarySearch(arr, val, left = 0, right = arr.length) {
    if (left > right) {
      return -1;
    }
    let middle = Math.floor((right + left) / 2);
    if (arr[middle] === val) {
      return middle;
    }
    if (arr[middle] > val) {
      return binarySearch(arr, val, left, middle - 1);
    }
    return binarySearch(arr, val, middle + 1, right);
  }