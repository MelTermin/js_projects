
function longestWord(sentence) {
  //console.log(sentence)//I will get the sentence
  let words= sentence.split(" ");
  //console.log("longest word",words) //=> the sentence will be split into array
  //console.log(words)
  let longestWord="";

  for (let word of words) {
    //console.log(word)
    if(word.length>longestWord.length) {
      longestWord=word;
    }
  }

return longestWord;
}

console.log(longestWord("I woke up early in the morning"))

//arithmetic sequence

function mathSequence (array) {
  console.log("array",array)
  let arith=new Set();
  let geo=new Set();

  for(let i=1; i<array.length; i++) {
    //console.log(array[i])
    let difference=array[i]-array[i-1]
    //console.log(difference)
    arith.add(difference)

    let difference2=array[i]/array[i-1]
    geo.add[difference2]

  }
  if(arith.size===1){
    return "Arithmetic"

  }
  if(geo.size===1){
    return "Geo"

  }
  return -1
}


console.log(mathSequence([2,4,6,8]))


//unique values

function unique (string) {

  // for(let i=0; i<string.length; i++) {
  //   //console.log(string[i])
  //indexOf returns position of a specified value in an array
  //   if(string.indexOf(string[i])!==string.lastIndexOf(string[i])){
  //     return false
  //   }
  // }
  // return true

  let values=[];
  for(let i=0; i<string.length; i++) {
    //position of a specified value in an array
    if(values.indexOf(string[i])!== -1) {
      return false
    }
    values.push(string[i])
    //console.log("values",values)
  }
  return true
}



console.log(unique("abcde"));
//true
console.log(unique("abacdefg"))
//false

//Capitalize each first letter of the array

function capitalizeWord (string) {
  //The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array
  let word= string.split(" ").map((item)=> {
    let firstLetter= item.slice(0,1).toUpperCase()
    //console.log(firstLetter)
    let restOfWord= item.slice(1)
    //console.log(restOfWord)
    return `${firstLetter}${restOfWord}`
  });
  return word.join(" ")

}

console.log(capitalizeWord("I got up early today"))


//array sum

function arraySum (numbers) {
  let sum=0;

  for(let i=0; i<numbers.length; i++) {
    sum +=numbers[i]

  }
  return sum
}

console.log(arraySum([4,2,3,4,5]))


function testRepeat (numbers) {
  let duplicate=""

  for(let i=0; i<numbers.length; i++) {
    //console.log(numbers.indexOf(numbers[i]))
    if(numbers.indexOf(numbers[i])!==i){
      duplicate = numbers[i];
      break; // stop cycle 
    }
  }
  return duplicate
}

console.log(testRepeat([7, 5, 7, 6, 6, 4, 9, 10, 2, 11]))


//reverse a string

function reverse(str) {
  const array= str.split("");
  const reversed= array.reverse().join("");
  return reversed
}


console.log(reverse("bala"))


//even or odd

function even_or_odd(number) {
  if(number % 2 ===0) {
    return `even`
  }else {
    return `odd`
  }
}

console.log(even_or_odd(3))


//return number of (count) of vowels in the string

function vowelCount(str) {
  let vowelC=0;
  const vowels=["a","e","o","u","i"];
  
  for(let i =0; i<str.length; i++) {
    if(vowels.includes(str[i])) {
      vowelC++
    }
  }
  return vowelC
}



console.log(vowelCount("abaaaccde"))


//check if a number n is divisible by x and y


function isDivisible(number,x,y) {
  if(number % x ===0 & number %y ===0) {
    return`true`
  }else {
    return`false`
  }
}

console.log(isDivisible(3,3,4))

//make a number negative

function makeNumNeg(number) {
 
  if(number<0) {
    return number
  }else{
    return number * -1
  }
}

console.log(makeNumNeg(42))


//find the smallest integer in the array

// function smallestInteger (array) {
//   let smallestNumber;

//   for(let i=1; i<array.length; i++) {
//    //I need something to compare to
//     const firstIterationNum=array[i]
//     console.log(firstIterationNum)
  
// }
function smallestInteger (array) {
  let smallestNumber=array[0]
  //console.log(smallestNumber)

  for(let i=1; i<array.length; i++) {
      if(array[i]<smallestNumber) {
        smallestNumber=array[i]
      }
      
  }
 return smallestNumber
}



console.log(smallestInteger([2,4,6,8]))


//remove first and last character of a string


function removeChar(str) {
  const lengthOfString=str.length
  return str.substr(1,lengthOfString-2)
}

console.log(removeChar("melissa"))


//Palindrome

function palindeome(str) {
  const splitStr=str.split("");
  const reversed=splitStr.reverse().join("")
  if(str===reversed) {
    return true
  }else {
    return false
  }
}


console.log(palindeome("table"))

function myFunction(obj) {
  console.log(obj.country)
}


console.log(myFunction({  continent: 'Asia',  country: 'Japan'}))


function repeat (letter,sentence) {

  //first way of doing it
  //return (sentence.split(letter)).length-1;

  //second way
  let count=0;

  //charAt() returns the character at a specified position in a string.
  for(i=0; i<sentence.length; i++) {
    if(sentence.charAt(i)===letter) {
      console.log(sentence.charAt(i))
      count++
    }
  }
  return count


  
}

console.log(repeat('m', 'how many times does the character occur in this sentence?'))



function turnNumberToArray(number) {

  const array= number.toString().split("")
  console.log(array)

  const digits = array.map((item)=> {
    return +item
  })
  return digits
}


console.log(turnNumberToArray(10))


function nthWord(word, number) {

  let index=0;
  let n=index+1

  const word1=word.charAt(n)
  return word1
}

console.log(nthWord('zyxbwpl',5))


function lastThreeChar (str) {
  return str.substring(0, str.length-3);
}

console.log(lastThreeChar('abcdefg'))


// function myFunction(a) {
  // Remove the first 3 elements of 'a'
// Return the result
//   return a.slice(3);
// }

//extracting last three elements of the array

// function myFunction(a) {
   
//   return a.splice(a.length-3)
// }

//array sorted in descending order

// function myFunction( arr ) {
//   return arr.sort((a, b) => b - a)
// }


function avarageArray (arr) {
  let sum=0;

  for(let i=0; i<arr.length; i++) {
   sum +=arr[i]/arr.length

  }
  return Math.round(sum)
}

console.log(avarageArray([10,100,40]))


function returnLongestString (array) {

  let longestStr=""

  for(let i=0; i<array.length; i++) {
    if(array[i].length>longestStr.length) {
        longestStr=array[i]
    }

  }

  return longestStr
}



console.log(returnLongestString(['help', 'me']))


// function myFunction(arr)  {
//   return arr.every((v,i,a)=>v===a[0]);
// }

function mergeTwoArrayRemoveDuplicate (arr1,arr2) {
  const merge= arr1.concat(arr2)
  console.log(merge)

  
let uniqueElements= merge.filter((element, index)=> {
  return merge.indexOf(element)===index
})
return uniqueElements.sort((a, b) => a - b)

}


console.log(mergeTwoArrayRemoveDuplicate([-10, 22, 333, 42], [-11, 5, 22, 41, 42]))


function sumArrayGreaterThanParameterB (array, number) {
  let sum=0;

  array.map((item)=> {
    if(item>number) {
      sum += item
    }
  })
  return sum
}



console.log(sumArrayGreaterThanParameterB([1, 2, 3, 4, 5, 6, 7], 2));


function rangeOfNumbers (min, max) {
   
  const myArray = [];
  for (var i = min; i <= max; i++) {
    myArray.push(i);
  }
  return myArray;
}



console.log(rangeOfNumbers(2, 10))


function groupArrayofStringsByFirstLetter(array) {

  let groups={};

  for(let i=0; i<array.length; i++) {
    let item=array[i]
    //Get the first character in a string:
    const firstChar=item.charAt(0).toLowerCase()

    groups[ firstChar ] = groups[ firstChar ] || [];
    groups[ firstChar ].push( item );
  }

  return groups
  
}

console.log(groupArrayofStringsByFirstLetter (['Alf', 'Alice', 'Ben']))




function modifiedSum(a, n) {
  let firstSum=0;
  let secondSum=0
  let total=0
  
  for(let i=0; i<a.length; i++){
   firstSum += a[i] *n
   console.log(firstSum)
    // console.log(firstSum)
    // secondSum += a[i]
    // total= firstSum-secondSum
  }
  
}

console.log(modifiedSum([1, 2, 3], 3))