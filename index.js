/**
 * @param {number[]} arr - First array
 * @param {number[]} arr1 - Second array
 * @param {number} target - The target element to search for.
 * @param {number} start - The index to start the search from.
 * @param {number} end - The index to end the search at.
 */

// to sort the array
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

// to get the length of the array
function getArrayLength(arr) {
    return arr.length;
}


// to filter the array based on target
function filterArray(arr, target) {
    return arr.filter((element) => element === target);
}

// to reduce the array gives the sum
function reduceArray(arr) {
    return arr.reduce((acc, curr) => acc + curr);
}


// to map the array
function mapArray(arr, target) {
    return arr.map((element) => element + target);
}


// to modify the array
function modifyArray(arr, target) {
    // to add element in the array at the end
    arr.push(target);

    // to remove element from the array at the end
    arr.pop();

    // to add element in the array at the start
    arr.unshift(target);

    // to remove element from the array at the start
    arr.shift();

    return arr;
}


// to find the index of the target
function searchArray(arr, target) {
    return arr.indexOf(target);
}

// to concat the array
function concatArray(arr, arr1) {
    return arr.concat(arr1);
}


// to slice the array from start till the end-1 elements
function sliceArray(arr, start, end) {
    return arr.slice(start, end);
}


// to iterate the array
function iterateArray(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

module.exports = {
    sortArray,
    getArrayLength,
    filterArray,
    reduceArray,
    mapArray,
    modifyArray,
    searchArray,
    concatArray,
    sliceArray,
    iterateArray
};