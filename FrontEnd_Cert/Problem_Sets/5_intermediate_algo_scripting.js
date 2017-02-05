/*
Intermediate Alog Scripting
50 hours / 21 problems 
About two hours a problem
*/

// #1 Sum All Numbers in a Range
/* Start

function sumAll(arr) {
  
  var flattened = arr.reduce(function(a, b) { 
  return a.concat(b);
  }, []);
  
  var sum = arr.reduce(function(a, b) {
  return a + b;
  }, 0);
  
  return sum;
}

//sumAll([1, 4]);

End */

// #2 Diff Two Arrays


function diffArray(arr1, arr2) {
  var newArr = [];
  newArr = arr1.concat(arr2);
  // Same, same; but different.
  return newArr.filter(
      function compare (item) {
        if (!arr1.includes(item) || !arr2.includes(item)) {
          return item;
        }
      }
    );
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/*
Old way
function diff(arr1, arr2) {
  var newArr = arr1.concat(arr2);

  function check(item) {
    if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
      return item;
    }
  }

  return newArr.filter(check);
}
*/

//Note remember to add OLD codes to a code mirror note book



/*
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
*/







// #3 Roman Numeral Converter

function convertToRoman(num) {
 return num;
}

convertToRoman(36);

// test
// convertToRoman(2) should return "II".
// convertToRoman(649) should return "DCXLIX"
// convertToRoman(2014) should return "MMXIV"

/* 
Notes:
Map decimals to roman numerals 
key value look up
Dictionary type
var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
var romans = ["I", "V", "X", "L", "C", "D", "M"];
var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

*/


// #4 Wherefore art thou
// Notes:
/* 

Object.prototype.hasOwnProperty()
method to know if the property name exists in an object (as its own property).

Object.keys() 
returns an array whose elements are strings corresponding to the enumerable properties found directly upon object. 
The ordering of the properties is the same as that given by looping over the properties of the object manually.
*/

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });







function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.replace(/\s+/g, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');

function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}