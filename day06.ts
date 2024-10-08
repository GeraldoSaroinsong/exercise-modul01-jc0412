//1. Write a function to get the lowest, highest and average value in the array (with and without sort function)
function lowHighAvg(arr : number[]): string{
    let lowest : number = arr[0];
    let highest : number = arr[0];
    let sum : number = 0;

    for(let i : number = 0; i < arr.length; i++){
        if(arr[i] < lowest){
            lowest = arr[i];
        }
        if(arr[i] > highest){
            highest = arr[i];
        }
        sum += arr[i];
    }
    return `Lowest : ${lowest}, Highest : ${highest}, Average : ${sum / arr.length}`;
}

// function lowHighAvg(arr : number[]){
//     arr.sort((a, b) => a - b);
//     let sum : number = 0;
//     for (let index = 0; index < arr.length; index++) {
//          sum += arr[index]; 
//     }
//     return `Lowest: ${arr[0]}, Highest: ${arr[arr.length - 1]}, Average: ${sum / arr.length}`;
// }

let a : number[] = [12, 5, 23, 18, 4, 45, 32];
console.log(lowHighAvg(a));

//2. Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'
function concatAnd(arr : string[]){
    let result : string = "";
    for(let index = 0; index < arr.length; index++) {
        if(index === arr.length - 1){
            result += `and ${arr[index]}`;
        }else{
            result += `${arr[index]}, `;
        }
    }
    return result;
}
let b : string[] = ["apple", "banana", "cherry", "date"];
console.log(concatAnd(b));

//3. Write a function from a given array of numbers and return the second smallest number
function secSmallest(arr : number[]){
    arr.sort((a, b) => a - b);
    return arr[1];
}
let c : number[] = [5, 3, 1, 7, 2, 6];
console.log(secSmallest(c));

//4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length
function arrSum(arrA : number[], arrB : number[]){
    const result : number[] = [];
    for(let index = 0; index < arrA.length; index++){
        result.push(arrA[index] + arrB[index]);
    }
    return result;
}
let arrA : number[] = [1, 2, 3];
let arrB : number[] = [3, 2, 1];
console.log(arrSum(arrA, arrB));

//5. Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array
function newUniqueElmnt(arr : number[], input : number){
    for(let index = 0; index < arr.length; index++){
        if(arr[index] === input){
            return `${input} already exists`;
        }
    }
    arr.push(input);
    return arr;
}
let e : number[] = [1, 2, 3, 4];
console.log(newUniqueElmnt(e, 4));
console.log(newUniqueElmnt(e, 7));

//6. Write a function from a given array of mixed data types and return the sum of all the number
function mixedSum(arr : any[]){
    let result : number = 0;
    for(let index = 0; index < arr.length; index++){
        if(typeof arr[index] === "number"){
            result += arr[index];
        }
    }
    return result;
}
let f = ["3", 1, "string", null, false, undefined, 2];
console.log(mixedSum(f));

//7. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input
function maxInput(limit : number, ...input : number[]){
    const result : number[] = [];
    for(let index : number = 0; index < limit; index++){
        result.push(input[index]);
    }
    return result;
}
console.log(maxInput(5, 2, 3, 4, 5, 6, 7, 8, 9, 1));

//8. Write a function that will combine 2 given array into one array
function combineArr(arr1 : number[], arr2 : number[]){
    for(let index : number = 0; index < arr2.length; index++){
        arr1.push(arr2[index]);
    }
    return arr1;
}
let arr1 : number[] = [1, 2, 3];
let arr2 : number[] = [4, 5, 6];
console.log(combineArr(arr1, arr2));

//9. Write a function to find duplicate values in an array
function findDupe(arr : number[]){
    arr.sort((a, b) => a - b);
    const newArr : number[] = [];
    for(let index = 0; index < arr.length; index++){
        if(arr[index] === arr[index - 1] || arr[index] === arr[index + 1]){
            if(!newArr.find((x) => x === arr[index])){
                newArr.push(arr[index]);
            }
        }
    }
    return newArr;
}
let h : number[] = [1, 4, 3, 5, 6, 1, 3, 5, 7, 7, 4];
console.log(findDupe(h));

//10. Write a function to find the difference in 2 given array
function findDiff(arr1 : number[], arr2: number[]){
    const newArr : number[] = [];
    const length : number = arr1.length > arr2.length ? arr1.length : arr2.length;

    for(let index : number = 0; index < length; index++){
        let diff1 = arr1.find((x) => x == arr2[index]);
        let diff2 = arr2.find((x) => x == arr1[index]);
        if(!diff1 && arr2[index]){
            newArr.push(arr2[index]);
        }
        if(!diff2 && arr1[index]){
            newArr.push(arr1[index]);
        }
    }
    return newArr.sort((a, b) => a - b);
}
console.log(findDiff([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

//11. Based on the given array write a function that will return primitive data types only
function findPrimitiveType(arr : any[]){
    const newArr : any[] = [];
    for(let index : number = 0; index < arr.length; index++){
        if(typeof arr[index] !== "object" || arr[index] === null){
            newArr.push(arr[index]);
        }
    }
    return newArr;
}
let i : any[] = [1, [], undefined, {}, "string", null, {}, []];
console.log(findPrimitiveType(i));

//12. Write a function from the below array of number that will return sum of duplicate values
function sumDupe(arr : number[]){
    arr.sort((a, b) => a - b);
    let sum : number = 0;
    for(let index = 0; index < arr.length; index++){
        if(arr[index] === arr[index - 1] || arr[index] === arr[index + 1]){
            sum += arr[index];
        }
    }
    return sum;
}
let j : number[] = [10, 20, 40, 10, 50, 30, 10, 60, 10];
console.log(sumDupe(j));

//13. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor
function rockPaperScissor(input : string){
    //1 batu
    //2 gunting
    //3 kertas
    input = input.toLowerCase();
    let functionHand = Math.floor(Math.random() * 3) + 1;
    if(input === "scissors"){
        if(functionHand === 1){
            return "Function returned rock, you lose";
        }else if(functionHand === 3){
            return "Function returned paper, you win";
        }else{
            return "Function returned scissors, it's a tie";
        }
    }else if(input === "rock"){
        if(functionHand === 3){
            return "Function returned paper, you lose";
        }else if(functionHand === 2){
            return "Function returned scissors, you win";
        }else{
            return "Function returned rock, it's a tie";
        }
    }else if(input === "paper"){
        if(functionHand === 2){
            return "Function returned scissors, you lose";
        }else if(functionHand === 1){
            return "Function returned rock, you win";
        }else{
            return "Function returned paper, it's a tie";
        }
    }
}
console.log(rockPaperScissor("rock"));