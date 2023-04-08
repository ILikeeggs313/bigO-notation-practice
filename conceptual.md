Big O notation Practice
Step one: simplifying expression

O(n + 10):  O(n)
O(100 * n): O(n)
O(25): O(1)
O(n^2 + n^3): O(n^3)
O(n + n + n + n): O(n)
O(1000 * log(n) + n): O(n)
O(1000 * n * log(n) + n): O(n * log n)
O(2^n + n^2): O(2^n)
O(5 + 3 + 1): O(1)
O(n + n^(1/2) + n^2 + n * log(n)^10): O(n^2)

-----------------------------------------------
Step Two: Calculating Time Complexity

Function 1: O(n)

Function 2: O(n)

Function 3: O(1)

Function 4: O(n)

Function 5: We have O(n * n) = O(n^2)

Function 6: Since include is fixed and constant, then we only count like a loop to the max numbers of vowerls, so O(n)

Part 3 - short answer

True or false: n^2 + n is O(n^2). T
True or false: n^2 * n is O(n^3). T
True or false: n^2 + n is O(n). F
What’s the time complexity of the .indexOf array method? 
    O(n)
What’s the time complexity of the .includes array method?
    O(n)
What’s the time complexity of the .forEach array method?
    Depending on what the callback does, should be at least O(n)
What’s the time complexity of the .sort array method?
    O(n log n)
What’s the time complexity of the .unshift array method?
    O(n)
What’s the time complexity of the .push array method?
    O(1)
What’s the time complexity of the .splice array method?
    O(n) or O(1)
What’s the time complexity of the .pop array method?
    O(1)
What’s the time complexity of the Object.keys() function?
    O(n)
    