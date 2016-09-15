/*

//Seek and destroyer
//hints
//Arguments object
//Array.prototype.filter()

function destroyer(arr) {
  // Remove all the values

  var args = Array.prototype.slice.call(arguments);
  //console.log(targets);
  arr = arr.filter(function(element){
    return( args.indexOf(element) === -1 );
  });
  
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

*/

/*

//Where do I belong
//hints: Array.prototype.sort()
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  return num;
}

getIndexToIns([40, 60], 50);

*/


function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  // temporary array holds objects with position and sort-value
  var args = Array.prototype.slice.call(arguments);
  var results = [];
  
  var mapped = args.map(function(el, i) {
    return { index: i, value: el.toLowerCase() };
  });

  // sorting the mapped array containing the reduced values
  mapped.sort(function(a, b) {
    return +(a.value > b.value) || +(a.value === b.value) - 1;
  });

  // container for the resulting order
  var result = mapped.map(function(el){
    return results[el.index];
  });
  
  return results.findIndexOf(num);
}

getIndexToIns([40, 60], 50);


