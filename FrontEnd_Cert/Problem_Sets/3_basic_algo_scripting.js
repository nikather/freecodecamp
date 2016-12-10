// Get Set for our Algorithm Challenges Complete

// Reverse a String Complete   *
function reverseString(str) {

  return str.split('').reverse().join(''); 
}

reverseString("hello");

// Factorialize a Number Complete   *
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return (num * factorialize(num - 1));
}

factorialize(5);

// Check for Palindromes Complete   *
function palindrome(str) {
  // Good luck!
  var test;
  str = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
  test = str;
  //var strReverse = str.split('').reverse().join('');
  var strReverse = str.split('').reverse().join('');
  return ((test == strReverse) ? true : false);
}



palindrome("eye");


// Find the Longest Word in a String Complete   *

function findLongestWord(str) {
  var longestWord = 0;
  var tmp = [];
      tmp = str.split(' ');
      longestWord = tmp.reduce(function (str1, str2) { return str1.length > str2.length ? str1 : str2; });
  return longestWord.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


// Title Case a Sentence Complete   *

function titleCase(str) {
  var tmp = [];
      tmp = str.split(' ');
  for (var i = 0; i < tmp.length; i++){

      tmp[i] = tmp[i].charAt(0).toUpperCase() + tmp[i].substring(1).toLowerCase();
  }
  str = tmp.join(' ');
  //return tmp;
  return str;
}

titleCase("I'm a little tea pot");


// Return Largest Numbers in Arrays Complete   *

function largestOfFour(arr) {
  // You can do this!
  //var bigNum = [];
  //bigNum = arr.reduce(function (max, arr) { return max[0] >= arr[0] ? max : arr; });
  //resutlt --> [1000,1001,857,1] returns the index with largest results
  
  //bigNum =  arr.reduce(function (max, arr) { return Math.max.apply(null, arr); });
  //resutlt --> [1001]

  return arr.map(function(collect){      
      return collect.reduce(function (a, b) { return (a > b) ? a : b;
    }, 0);
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// Confirm the Ending Complete   *

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  return ( target === str.substr(str.length - target.length)) ? true : false;
}

confirmEnding("Bastian", "n");


// Repeat a string repeat a string Complete   *

function repeatStringNumTimes(str, num) {
  // repeat after me
  return (num >= 1) ? str.repeat(num) : "";
}

repeatStringNumTimes("abc", 3);

//Truncate a string Complete   *

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
      if (num <= 3){
        return str.slice(0, num) + "...";
      }
    return str.slice(0, num-3) + "...";
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("A-", 1);

//Chunky Monkey Complete   *

function chunkArrayInGroups(arr, size) {
  // Break it up.
  //arr = arr.map(function(){return arr.slice(0, size);});
  var grp = [];
  var i = 0;
  //grp = arr.forEach(function(element, index, array){ blah   });
  for( i = 0; i < arr.length; i += size){
    grp.push(arr.slice(i, i + size));
  }  



  return grp;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


// Slasher Flick Complete   *

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var slashed = [];
  //slashed = arr.splice(arr.length, howMany);
  slashed = arr.slice(howMany);
  return slashed;
}

slasher([1, 2, 3], 2);



// Mutations Complete   *

function mutation(arr) {
  var a = arr[0].toLowerCase().split('');
  var b = arr[1].toLowerCase().split('');

  for (var i = 0; i < b.length; i++){
    if(a.indexOf(b[i]) === -1){
      return false;
    }
  }

  return true;
}
mutation(["hello", "hey"]);



// Falsy Bouncer Complete   *

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var re = [
    /false/i,
    /null/i,
    /0/i,
    /("")/i,
    /undefined/i,
    /\0/,
    /NaN/i    
  ];
  
  //for (var i in arr){
  //    arr = arr.filter(function(arr){ return arr >= 1;});
  //}
  var filtered = [];
  //return arr;
  filtered = arr.filter(function (elem) {
      return !re.some(function (patterns) {
           return patterns.test(elem);
      });
  });
  filtered = filtered.filter(function(v){return v!== "";});
  
  return filtered;

}

bouncer([7, "ate", "", false, 9]);


// Seek and Destroy Complete   *

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


// Where do I belong Complete   *

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.

  var index =
   arr.sort(function(cur_pos, next_pos){
    return (cur_pos > next_pos);
   }).findIndex(function(searchElement){
     return (num <= searchElement);
   });
  //if num calculated to be inserted at the end then return array.length
  //if num calculated to be at the value of searchElement then return index
  return ( ( index === -1 ) ? arr.length : index );

}

getIndexToIns([40, 60], 50);


// Caesars Cipher Complete   *

function rot13(str) { // LBH QVQ VG!
  var results = "";
  // returns decoded letters
  function decode(secrets){
    var plain_text = "";
    plain_text = String.fromCharCode(secrets.charCodeAt(0));
    return plain_text;
  }
  
  // builds decoded phrase from letters
  for (var i = 0; i < str.length; i++){
    var encoded_letter = str.charCodeAt(i);
    //results += String.fromCharCode((encoded_letter % 26) + 65);
    if (encoded_letter < 65){
      results += String.fromCharCode(encoded_letter);
    } else {
      results += String.fromCharCode( ( (encoded_letter - 65 + 13) % 26) + 65);
    }
    
  }
  

  return results;
}

// Change the inputs below to test
//rot13("SERR PBQR PNZC");
//rot13("SERR CVMMN!");
//rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");

//Sum All Numbers in a Range
function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var sum = 0;
    for (var i=min; i <= max; i++){
        sum += i;
    }
  return(sum);
}

sumAll([1, 4]);














/* 
Notes Bellow
*/





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


