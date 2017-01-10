var greeting = "Hey There!";
var greet = function (){;
    console.log(greeting)
};
greet();
var response = "what are you on about today fred?";
var respond = function (){;
    console.log(response)
};
respond();
var problem = 9 / 3;
var answer = function (){
    ; console.log(problem);
}
answer();
//Messing with arrays
var number =["one", "two", "three"];
var nacey = number[0];
console.log(nacey, nacey);

console.log("###THIS IS THE START OF ARRAYS!!!")
console.log("Below is pulling seeting the value of the number at 'index-zero' to 3")
var myArray = [1,2,3];
// Only change code below this line.
myArray[0] = 3; // The number "1" now equals "3"
console.log(myArray);

//Multidimentional Array
var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11

//Manipulate Arrays With push
console.log("below is utilizing the push method to add 4 to the end of the array")
var arr = [1,2,3];
arr.push(4);
console.log(arr);
//
console.log("Below is the use of the 'push' array to push John '23' off the beginning");
var myArray = [["John", 23], ["cat", 2]];
myArray.shift(["dog", 3]);
;
console.log(myArray);
// arr is now [1,2,3,4]
var shiftArray = [["one", "two"], ["three", "four"]];
    shiftArray.pop();
console.log(shiftArray)

console.log("below is using a function with parameters to call arguments")
function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(1,2);

console.log("Return a Value from a Function with Return")
// Example
function timesFive(int) {
  return int * 5; 
}
var answer = timesFive(5); // 8

// Stakc and Queues


(nextInLine([], 6) in the cntext of this:
function nextInLine(arr, item) {
   
  return item;  // Change this line
}
var testArr = [1,2,3,4,5];
(nextInLine([], 1)
@RobDeNo It is saying that passing an empty array will return 1 because you push 1 then remove 1
@RobDeNo Look, if you add 1 to the end of the array. [2, 1]
Then if you remove the first element from the array.
you remove 2 and the array becomes [1]

Robert DeNovellis @RobDeNo 12:16
so passing an array with 2 i should get 2 becuase i return 2 and push 2

Joseph @revisualize 12:17
@RobDeNo Why would you push 2?
The number is 1
 // Write a function nextInLine which has two parameters 
// an array (arr) and a number (item).
function nextInLine(arr, item) {
    // Add the number to the end of the array,

    // then remove the first element of array.
    // The nextInLine function should 
    // then return the element that was removed.
    return item; // Change this line
}
How do you add a number (item) to the end of an array (arr)? What does this method return?
How do you remove the first element from an array (arr)? What does this method return?
@RobDeNo Do you know what parameters are?
@RobDeNo Do you know what parameters are?

Robert DeNovellis @RobDeNo 12:19
so
it has nothing to do with the testArr

Joseph @revisualize 12:19
@RobDeNo zero.

Robert DeNovellis @RobDeNo 12:19
it is literally using just the simple array with a paramteter of 2

Joseph @revisualize 12:19
@RobDeNo as per the instructions.
@RobDeNo no the parameter is arr the value of that array may be [2]