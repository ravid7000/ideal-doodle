# DS Questions

### Find paires whoes sum is equal to given number.
```
Input:
List: [2, 3, 4, 8, 5, 10, 9, 7]
Sum: 7


Output:
[3, 4]
[2, 5]
```
[Solution](https://www.geeksforgeeks.org/count-pairs-with-given-sum-set-2/)

### Find missing number in two given list.
```
Input:
List1: [4, 5, 6, 7, 8]
List2: [4, 5, 7, 8]


Output:
6
```

### Reduce number to a single digit by subtracting adjacent digits repeatedly
Given a number N, the task is to reduce it to a single-digit number by repeatedly subtracting the adjacent digits. That is, in the first iteration, subtract all of the adjacent digits to generate a new number, if this number contains more than one digit, repeat the same process until it becomes a single-digit number.

```
Input:
N = 6972


Output:
2
Steps:
| 6 – 9 | = 3
| 9 – 7 | = 2
| 7 – 2 | = 5

After first step we get 325 but 325 is not a single-digit number so we’ll further reduce it until we do not get single digit number.

| 3 – 2 | = 1
| 2 – 5 | = 3

And now the number will become 13, we’ll reduce it furthur
| 1 – 3 | = 2
```

[Solution](https://www.geeksforgeeks.org/reduce-number-to-a-single-digit-by-subtracting-adjacent-digits-repeatedly/)

### Kth smallest element in the array using constant space when array can’t be modified
Given an array arr[] of size N and an integer K, the task is to find the Kth smallest element from the array in constant extra space and the array can’t be modified.

```
Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 3
Output: 7
Given array in sorted is {3, 4, 7, 10, 15, 20}
where 7 is the third smallest element.


Input: arr[] = {12, 3, 5, 7, 19}, K = 2
Output: 5
```

[Solution](https://www.geeksforgeeks.org/kth-smallest-element-in-the-array-using-constant-space-when-array-cant-be-modified/)


### Find largest multiplication pair in the give list
```
Input:
list = [-100, 5, 100, 300, -400, 90, 80]

Output:
[-100, -400]
```

### Check if input string is valid for the following rules
A string is valid:
* If first character appears N times then all characters should appear N times
* If all characters except one appears N times and one character appear N + 1 times.
Otherwise string is not valid
```
Input:
strA = 'abc'
strB = 'xxyyzz'
strC = 'yyzyxzx'
strD = 'eebcbccee'
strE = 'ddeeecccpp'

Output:
strA is valid
strB is valid
strC is valid
strD is not valid
strE is not valid
```
