# @hsc92180/array_methods

This npm package provides various methods for manipulating arrays in JavaScript.

## Installation

You can install this package using npm:

```bash
npm install @hsc92180/array_methods
```

## Usage

To use the array manipulation methods provided by this package, import them into your JavaScript code as follows:

```javascript
const arrayMethods = require('@hsc92180/array_methods');

// Example usage of array manipulation methods
const arr = [3, 1, 4, 1, 5, 9];
const target = 1;
const start = 0;
const end = 3;

console.log(arrayMethods.sortArray(arr)); // Sort the array
console.log(arrayMethods.getArrayLength(arr)); // Get the length of the array
console.log(arrayMethods.filterArray(arr, target)); // Filter the array based on the target
console.log(arrayMethods.reduceArray(arr)); // Reduce the array to get the sum
console.log(arrayMethods.mapArray(arr, target)); // Map the array elements
console.log(arrayMethods.modifyArray(arr, target)); // Modify the array
console.log(arrayMethods.searchArray(arr, target)); // Search for the index of the target
console.log(arrayMethods.concatArray(arr, [2, 7])); // Concatenate the array with another array
console.log(arrayMethods.sliceArray(arr, start, end)); // Slice the array
arrayMethods.iterateArray(arr); // Iterate over the array
```

## Available Methods

- `sortArray(arr)`: Sorts the array.
- `getArrayLength(arr)`: Returns the length of the array.
- `filterArray(arr, target)`: Filters the array based on the target element.
- `reduceArray(arr)`: Reduces the array to get the sum of elements.
- `mapArray(arr, target)`: Maps each element of the array.
- `modifyArray(arr, target)`: Modifies the array by adding or removing elements.
- `searchArray(arr, target)`: Finds the index of the target element in the array.
- `concatArray(arr, arr1)`: Concatenates the array with another array.
- `sliceArray(arr, start, end)`: Slices the array from start to end-1 elements.
- `iterateArray(arr)`: Iterates over the array.

## License

This package is licensed under the ISC License.