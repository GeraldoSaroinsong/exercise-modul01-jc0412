//1. Write a code to display the multiplication table of a given integer
let _n1 : number = 9;
let result : string = "";

for(let i : number = 1; i <= 10; i++){
    result = result + `${_n1} x ${i}\n`; // add new values to the existing one in the variable
    console.log(result);
}
console.log(result);

//2. Write a code to check whether a string is a palindrome or not
// Create two string variables to hold the input word and the mirrored result
let kata : string = "kata";
let mirror : string = "";
// Create a boolean variable to hold the isPalindrome status and set it to false since not every word is a palindrome
let isPalindrome : boolean = false;
 
// Create a loop to repeat up to the length of the input word
for(let i : number = kata.length - 1; i >= 0; i--){
    // Write a code to seperate each character starting from the last one
    //mirror = mirror + kata.slice(i-1, i); // spell the input word backwards and add each character to the mirror variable
    //mirror = mirror + kata.charAt(i);
    mirror = mirror + kata[i];
    console.log(mirror);
}

// write a code to check if the mirrored result is exactly the same as the input word
let palindrome : string = "";
if(mirror === kata){
    palindrome = `${kata} is a palindrome`;
}else{
    palindrome = `${kata} is not a palindrome`;
}
console.log(palindrome);

//3. Write a code to convert centimeter to kilometer
let _centi : number = 100000;
let _kilo : number = _centi / 100000;
console.log(`${_centi.toLocaleString()} cm = ${_kilo} km`);

//4. Write a code to format number as currency (IDR)
let nominal : number = 15857382;
let currency : string = `Rp. ${nominal.toLocaleString()}.00`;
console.log(currency);

//5. Write a code to remove the first occurrence of a given “search string” from a string
let kalimat5 : string = "hello world";
let hapus5 : string = "ell";
console.log(kalimat5.replace(hapus5, ""));

//6. Write a code to capitalize the first letter of each word in a string

let kalimat6 : string = "hElLo, woRlD. hOW aRe You";
let hasil6 : string = "";
for(let i : number = 0; i <= kalimat6.length; i++){ // loop to access each character
    let karakter : string = kalimat6.charAt(i); // variable to hold the current character
    let charPrev2 : string = kalimat6.charAt(i - 2) // variable to hold the 2 characters before the current one
    if(i === 0 || charPrev2 === "."){ // check if the current character is in index 0 or if it's a new sentence, which is after a period and space
        hasil6 += karakter.toUpperCase(); // if the condition is met, convert the character to uppercase
    }else{
        hasil6 += karakter.toLowerCase(); // convert the rest of the characters to lowercase
    }
    console.log(hasil6);
}
console.log(hasil6);

//7. Write a code to swap the case of each character from string 
let sent : string = "The QuiCk BrOwN Fox";
let swapSent : string = "";
console.log(sent.length);

for(let i : number = 0; i < sent.length; i++){
    let swapChar : string = sent.charAt(i); // create a variable to hold the current character
    if(swapChar === swapChar.toUpperCase()){ // if the current character is in uppercase, swap it to lowercase
        swapChar = swapChar.toLowerCase();
    }else if(swapChar === swapChar.toLowerCase()){ // if the current character is in lowercase, swap it to uppercase
        swapChar = swapChar.toUpperCase();
    }
    swapSent += swapChar;
}
console.log(swapSent);

//8. Write a code to find the largest of two given integers
let a : number = 42;
let b : number = 27;
console.log(Math.max(a, b));

//9. Write a conditional statement to sort three numbers
let a1 : number = 3;
let b1 : number = 1;
let c1 : number = 2;
let n : number;
if(a1 > b1){
    n = a1; a1 = b1; b1 = n;
}
if(a1 > c1){
    n = a1; a1 = c1; c1 = n;
}
if(b1 > c1){
    n = b1; b1 = c1; c1 = n;
}
console.log(a1, b1, c1);

//10. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
let data : any = "hello";
let dataType : number;
console.log(typeof(data));
if(typeof(data) === "string"){
    dataType = 1;
}else if(typeof(data) === "number"){
    dataType = 2;
}else{
    dataType = 3;
}
console.log(dataType);

//11. Write a code to change every letter a into * from a string of input
let inputString = 'hAlo semuanya';
let resultString = inputString.replace(/[aA]/g, '*'); //use a global flag (g) to change every letter in the sentence and not just the first one

console.log(resultString);