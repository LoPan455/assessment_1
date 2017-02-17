// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;

for (var i = 0; i < 5; i++) {
  checkz++;
}



// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2

while(checkz > -6 ){
  checkz -= 2;
}

//were you looking for:

var i = 0;  //added a counter variable to track iterations
while(i < 3){
  checkz -= 2;
  i++;
}


// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
//

//This code is iterating over an array of numbers
//at each iteration it is incrementing the variable 'total' by the value
//located at each array index. When the loop is done running, it is
//logging the value.

var numbers = [1, 2, 3, 4, 5, 6, 7];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);
