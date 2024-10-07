//1. create a function to generate a triangle of numbers based on input
function triangle(triInput : number){
    let triOutput : string = ``;
    //let baris : number = 0;
    let angka : number = 0;
    for(let i : number = 1; i <= triInput; i++){
        //baris++;
        for(let j : number = 1; j <= i; j++){
            angka++;
            if(angka < 10){
                triOutput += `0${angka} `;
            }else{
                triOutput += `${angka} `;
            }
        }
        triOutput += `\n`;
    }
    return triOutput;
}
let _input : number = 4;
console.log(triangle(_input));

//2. create a function that loops as many times as user input and replaces multiples of 3 with "Fizz" and multiples of 5 with "Buzz"
function fizzBuzz(n : number){
    let result : string = ``;
    for(let i : number = 1; i <= n; i++){
        if(i % 5 === 0 && i % 3 === 0){
            result += `FizzBuzz,`;
        }else if(i % 5 === 0){
            result += `Buzz,`;
        }else if(i % 3 === 0){
            result += `Fizz,`;
        }else{
            result+= `${i},`;
        }
    }
    return result;
}
let _input2 : number = 15;
console.log(fizzBuzz(_input2));

//3. create a function that calculates the BMI based on user input
function bmi(a : number, b : number){
    let bmiResult : string = ``;
    if(a / (b^2) < 18.5){
        bmiResult = `less weight`;
    }else if(a / (b^2) >= 18.5 && a / (b^2) < 25.0){
        bmiResult = `ideal`;
    }else if(a / (b^2) >= 25.0 && a / (b^2) < 30.0){
        bmiResult = `overweight`;
    }else{
        bmiResult = `obesity`;
    }
    return bmiResult;
}
let bodyWeight : number = 62;
let bodyHeight : number = 1.60;
console.log(bmi(bodyWeight, bodyHeight));

//4. create a function that removes ecery odd number in an array
function oddRemove(a : number[]){
    let even : number[] = [];
    for(let i : number = 0; i <= a.length; i++){
        if(a[i] % 2 === 0){
            even.push(a[i]);
        }
    }
    return even;
}
let _input4 : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(oddRemove(_input4));

//5. Write a function to split a string and convert it into an array of words
// function splitWords(a : string){
//     let splitRes : string[] = a.split(" ");
//     return splitRes;
// }
// let word : string = "Hello World";
// // let splitRes : string[] = word.split(" ");

// console.log(splitWords(word));
// // console.log(splitRes);
function splitWords(a : string): string[]{
    let words : string[] = [];
    let word : string = ``;

    for(let i : number = 0; i <= a.length; i++){
        if(a.charAt(i) !== " "){
            word += a.charAt(i);
        }else{
            words.push(word);
            word = "";
        }
    }
    if(word !== ""){
        words.push(word);
        word = "";
    }
    return words;
}
let sentence : string = "Hello world, this is a test";
console.log(splitWords(sentence));
console.log(sentence.split(" "));
