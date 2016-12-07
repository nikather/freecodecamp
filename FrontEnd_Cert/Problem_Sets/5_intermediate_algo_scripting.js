

// #1 Sum All Numbers in a Range


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


// #2 Diff Two Arrays


function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);







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



// #4 Wherefore art thou

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

