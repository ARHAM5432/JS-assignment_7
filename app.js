// Palindrome check with method (split, reverse, join)
var word = prompt("Enter a word:");
var charRev = word.split("").reverse().join("");

if (charRev === word) { 
    alert("Palindrome hai bhai! ✅");
} else {
    alert("Palindrome nahi hai bhai! ❌");
}

// Palindrome check without methods
var inputWord = prompt("Enter a word:");
var manuallyRev = ""; 

for (let i = inputWord.length - 1; i >= 0; i--) {
    manuallyRev += inputWord[i]; 
}

if (manuallyRev === inputWord) {
    alert("Palindrome hai bhai! ✅");
} else {
    alert("Palindrome nahi hai bhai! ❎❌");
}
