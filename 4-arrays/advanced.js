// 1 - Use a built-in method of Arrays
// to add the value 32 to the end of
// the following array.

var arr = [3, 4, 6, 0];
arr.push(32);

// 2 - Remove the first value from
// arr using the Array built-in method slice.

// old answer: arr.slice(0);
//I interpreted the instructions as if we would need to run the .slice() method at anytime, not
//on the state of the array at the start of step 1.

arr.slice(1) //new answer


// 3 - Add the number 11 to the beginning of arr
arr.unshift(11);
