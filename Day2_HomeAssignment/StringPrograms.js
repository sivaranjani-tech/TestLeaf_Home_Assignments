// Assignment Details:
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:
// Input: s = " fly me to the moon "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:
// Write a function to check if two strings are anagrams.
// Input: isAnagram('listen', 'silent')
// Output: true
// Input: isAnagram('hello', 'world')
// Output: false
// Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.

const { reverse } = require("node:dns")

// Example 1:
// Input: s = "Hello World"
let s="Hello World"
words=s.trim().split(" ")
lastword=words[words.length-1]
console.log(lastword.length)


//Example 2:
// Input: s = " fly me to the moon "
// Output: 4
// Explanation: The last word is "moon" with length 4.
let str = " fly me to the moon "
splitwords=str.trim().split(" ")
lastword1=splitwords[splitwords.length-1]
console.log(lastword1.length)


// Example 3:
// Write a function to check if two strings are anagrams.
// Input: isAnagram('listen', 'silent')
// Output: true
// Input: isAnagram('hello', 'world')
// Output: false

function isAnagram(str1, str2) {
    // Remove spaces and convert to lowercase
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // Compare sorted characters
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(isAnagram('listen', 'silent'));  // true
console.log(isAnagram('hello', 'world'));   //false