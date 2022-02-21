//Question 1
// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    // a.	Programmatically subtract the value of the first element in the array from the 
    //      value in the last element of the array (do not use numbers to reference the last element, 
            //find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
    // b.	Add a new age to your array and repeat the step above to ensure it is dynamic 
            //(works for arrays of different lengths).
    // c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.

//Question 1:
let ages = [3, 9, 23, 64, 2, 8, 28, 93.];

//Question 1 - Part a:
console.log(ages[ages.length - 1] - ages[0]);
//Question 1 - Part b:
ages.push(30); 
console.log(ages[ages.length - 1] - ages[0]);
//Question 1 - Part c:
var i, sum=0;
    for(i=0; i<ages.length; i++)
    {
        sum = sum + ages[i];
    }
    console.log("The average age in the ages array is: ",sum/ages.length);


// Question 2
// Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
//     a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
//          Print the result to the console.
//     b.	Use a loop to iterate through the array again and concatenate all the names together, 
//             separated by spaces, and print the result to the console.

//Question 2
let names = [ "Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//Question 2 - Part a:
sum=0;
    for(i=0; i<names.length; i++)
    {
        sum = sum + names[i].length;
    }
    console.log(sum/names.length);

//Question 2 - Part b:
let concatNames= names[0];

for(i=1; i<names.length; i++)
{
    concatNames = concatNames.concat(" ",names[i]);
}

console.log(concatNames);

//Question 5
// Create a new array called nameLengths. Write a loop to iterate over the 
//previously created names array and add the length of each name to the nameLengths array.
// For example:
// namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array

let nameLengths = [];
for(i=0; i<names.length; i++)
{
    nameLengths[i] = names[i].length;
}

// //Question 6
//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
//Print the result to the console.
sumOfNames=0;
for(i=0; i<nameLengths.length; i++)
{
    sumOfNames = sumOfNames + nameLengths[i];
}
console.log(sumOfNames);

// Question 7
// Write a function that takes two parameters, word and n, as arguments and returns the word 
// concatenated to itself n number of times. 
// (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function concatParam(word, n){
    let concatWord= word;
    for(i=1; i<=n; i++){
        concatWord = concatWord.concat(word);
    }
    return concatWord;
}
//Printing the concatinated word to make sure function works

console.log("Concatenated words example: ",concatParam("Test", 3));

// Question 8
// Write a function that takes two parameters, firstName and lastName, 
// and returns a full name (the full name should be the first and the last name separated by a space).

function fullName(firstName, lastName){
    return firstName.concat(' ' + lastName);
}
console.log("Full Name is: ",fullName("Desiree", "Aguilar"));

//Question 9
//Write a function that takes an array of numbers and returns 
//true if the sum of all the numbers in the array is greater than 100.

function arrayOfNumbersTotal(array1){
    sum = 0;
    for (i=0; i<array1.length; i++){
        sum = sum + array1[i];
    }
    if(sum > 100){
        return true;
    }
    else{
        return false;
    }
}

//Question 10
//Write a function that takes an array of numbers and returns the average of all the elements in the array.
function arrayAverage(array2){
    sum = 0;
    for(i=0; i<array2.length; i++){
        sum = sum + array2[i];
    }
    return (sum/array2.length);
}

//Question 11
//Write a function that takes two arrays of numbers and returns true if the average 
//of the elements in the first array is greater than the average of the elements in the second array.
function compareTwoArrays(array3, Array4){
        if(average(array3) > average(Array4)){
            return true;
        }
        else{
            return false;
        }
    }

//Quetion 12
//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
//and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside && (moneyInPocket > 10.50)){
        return true;
    }
    else{
        return false
    }
}

//Question 13
//Create a function of your own that solves a problem. 
//In comments, write what the function does and why you created it.

//The function I created is a function that sorts an array. 
//The purpose of this array is to sort items while doing invenrory. 
function sortArrayForInventory(array){
    return array.sort();
}







