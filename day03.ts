//1. Write a code to display the multiplication table of a given integer
let _n1 : number = 9;
let result : string;

for(let i : number = 1; i <= 10; i++){
    let _mult : string = `${_n1} * ${i} = ${_n1 * (i)}\n`;
    result += _mult; // this is used to ad new values to an existing one. thus the result
}
console.log(result);

//2. Write a code to check whether a string is a palindrome or not
// Create two string variables to hold the input word and the mirrored result
let kata : string = "malam";
let mirror : string = "";
// Create a boolean variable to hold the isPalindrome status and set it to false since not every word is a palindrome
let isPalindrome : boolean = false;

// Create a loop to repeat up to the length of the input word
for(let i : number = kata.length; i > 0; i--){
    // Write a code to seperate each character starting from the last one
    let kebalikan : string = kata.slice(i-1, i);
    console.log(kebalikan);
    // Store each character into the mirror variable
    mirror += kebalikan;
}
// write a code to check if the mirrored result is exactly the same as the input word
if(mirror === kata){
    console.log(`${kata} is a palindrome`);
}else{
    console.log(`${kata} is not a palindrome`);
}

//3. Write a code to convert centimeter to kilometer
let _centi : number = 100000;
let _kilo : number = _centi / 100000;
console.log(`${_centi.toLocaleString()} cm = ${_kilo} km`);

//4. Write a code to format number as currency (IDR)
let nominal : number = 15857382;
let currency : string = `Rp. ${nominal.toLocaleString()}.00`;
console.log(currency);

//5. Write a code to remove the first occurrence of a given “search string” from a string
let _kalimat : string = "hello world";
let _hapus : string = "ell";
console.log(_kalimat.replace(_hapus, ""));

//6. Write a code to capitalize the first letter of each word in a string
let _sentence: string = "hello world, how are you"; //create the variable to hold the input
let capSentence: string = ""; // create a variable to hold the result
let capNext: boolean = true; // create a boolean variable to flag when to capitalize letter

for(let i = 0; i < _sentence.length; i++){
    // create a variable to hold the letter on the current index
    let char = _sentence.charAt(i);
    if(char === " "){ // if the character is a space, just add it to the sentence as is
        capSentence += char; 
    }else{
        if(capNext){ // if the capNext value is true, capitalize the letter and set the boolean value to false so the code won't capitalize the next word
            capSentence += char.toUpperCase(); 
            capNext = false; 
        }else{ // if the boolean value is false, just add the character to the sentence as is
            capSentence += char; 
        }
    }
    if(char === " " || i === _sentence.length){ // if the current character is a space or if it's the last character of a sentence, set the boolean value to true
        capNext = true; 
    }
}
console.log(capSentence);

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
let inputString = 'halo semuanya';
let resultString = inputString.replace(/a/g, '*'); //use a global flag (g) to change every letter in the sentence and not just the first one

console.log(resultString);