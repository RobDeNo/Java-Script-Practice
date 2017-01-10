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


