// This is back-end code
const words = prompt("Enter your sentence.");

function userSentence() {
  let firstLetter = words.charAt(0);
  let lastNumber = words.length;
  let lastLetter = words.charAt(lastNumber - 1);
  let newWords = firstLetter + lastLetter;
  return newWords.toUpperCase();
    
}

console.log(userSentence());

function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray
}

let newWord = userSentence();
console.log(reverseString(newWord));

let newSentence = reverseString(newWord);

console.log(words + newSentence);

function divide() {
  const sentenceLength = words.length;
  let sentenceDiv = Math.floor(sentenceLength/2);
  console.log(sentenceDiv);
  let middleChar = words.charAt(sentenceDiv);
  console.log(middleChar);
 
  return halfSentence
}

// console.log(halfSentence);
console.log(divide());


// function concatWords(concat) {
//   let concat = (words + reverseString);
//   return concat;
// }


// console.log(concatWords);


// let firstLetter = userSentence.charAt(0);
// // let lastLetter = userSentence.lastIndexOf();
// console.log(userSentence(firstLetter));




// prompt(words);


// this is front-end code
// $(document).ready(function(){
//   $(button).click(function);
      // $("#output").text(result); 
//    
    
  // });

