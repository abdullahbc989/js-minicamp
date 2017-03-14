// A variable is a container in which you can place any kind of information you want
// A string is a line of text, like that which is actually spoken in a book.
// Functions are blocks of code that execute an amount of lines of code behind the scenes.
// If statements are used to contol possible outcomes
// Boolean values are values that equal 1 or 0. True or False.

//Do not change any of the function names

function multiplyByTen(num) {
  var product = num * 10;
  return product;
  //return num after multiplying it by ten
  //code here
}

function subtractFive(num) {
  var difference = num - 5;
  return difference;
  //return num after subtracting five
  //code here
}

function areSameLength(str1, str2) {
  var length1 = str1.length;
  var length2 = str2.length;

  if (length1 === length2) {
    return true;
  }
  else {
    return false;
  }
  //return true if the two strings have the same length
  //otherwise return false
  //code here
}

function areEqual(x, y) {
  if (x === y) {
    return true;
  }
  else {
    return false;
  }
  //return true if x and y are the same
  //otherwise return false
  //code here
}

function lessThanNinety(num) {
  if (num < 90) {
    return true;
  }
  else {
    return false;
  }
  //return true if num is less than ninety
  //otherwise return false
  //code here
}

function greaterThanFifty(num) {
  if (num > 50) {
    return true;
  }
  else {
    return false;
  }
  //return true if num is greater than fifty
  //otherwise return false
  //code here
}

function add(x, y) {
  var product = x + y;
  return product;
  //add x and y together and return the value
  //code here
}

function subtract(x, y) {
  var difference = x - y;
  return difference;
  //subtract y from x and return the value
  //code here
}

function divide(x, y) {
  var quotient = x / y;
  return quotient;
  //divide x by y and return the value
  //code here
}

function multiply(x, y) {
  var multiplied = x * y;
  return multiplied;
  //multiply x by y and return the value
  //code here
}

function getRemainder(x, y) {
  var remainder = x % y;
  return remainder;
  //return the remainder from dividing x by y
  //code here
}

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
  //return true if num is even
  //otherwise return false
  //code here
}

function isOdd(num) {
  if (num % 2 != 0) {
    return true;
  }
  else {
    return false;
  }
  //return true if num is false
  //otherwise return false
  //code here
}

function square(num) {
  var sqaured = Math.pow(num, 2);
  return sqaured;
  //square num and return the new value
  //code here
}

function cube(num) {
  var cubed = Math.pow(num, 3);
  return cubed;
  //cube num and return the new value
  //code here
}

function raiseToPower(num, exponent) {
  var raisedToPower = Math.pow(num, exponent);
  return raisedToPower;
  //raise num to whatever power is passed in as exponent
  //code here
}

function roundNumber(num) {
  var rounded = Math.round(num);
  return rounded;
  //round num and return it
  //code here
}

function roundUp(num) {
  var roundedUp = Math.ceil(num);
  return roundedUp;
  //round num up and return it
  //code here
}

function addExclamationPoint(str) {
  var newString = String(str) + '!';
  return newString;
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
}

function combineNames(firstName, lastName) {
  var fullName = String(firstName) + ' ' + String(lastName);
  return fullName;
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
}

function getGreeting(name) {
  var greeting = 'Hello ' + String(name) + '!';
  return greeting;
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  var area = width * length;
  return area;
  //return the area of the rectangle by using length and width
  //code here
}

function getTriangleArea(base, height) {
  var area = (base * height)/2;
  return area;
  //return the area of the triangle by using base and height
  //code here
}

function getCircleArea(radius) {
  var area = Math.PI * Math.pow(radius, 2);
  return Math.round(area);
  //return the rounded area of the circle given the radius
  //code here
}

function getRectangularPrismVolume(length, width, height) {
  var volume = width * length * height;
  return volume;
  //return the area of the 3D rectangular prism given the length, width, and height
  //code here
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
