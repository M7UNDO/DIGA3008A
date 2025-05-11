//var refers to variables that are global
//let refers to local variables, most commonly used. You don't want too many global variables;
//Unlike declaring in C# JavaScript will automatically detect what type of variable you are using
//Logging to the console in JavaScript is console.log(the thing you are logging)

var Number1= 10;
var Number2=20;
var myName = "My name is Mfundo Dhlamini";
var rate= 0.5;
var decision= true;

//JavaScript Objects
//Example of a custom object
let xbox = {series: "series X", price: 8000,}
console.log(xbox);

//Built-in object example
var randomNumber = Math.random();
console.log(randomNumber);
//objects like Math.floor(x) are useful for rounding to the nearest integer
//e.g
function getRandomInt(max)
{
   return Math.floor(Math.random() * max)
}

console.log(getRandomInt(5));//In this case it would generate a random int from 0 to 5

//DOM object Responsible for document object model

//window.alert("Hello I am Siya");

//data types array let you store different elements;
let colours = ["blue", "red", "green"]
//Array in JS also start at element 0
console.log(colours[0]) 
//for the whole array
console.log(colours);
//Unlike C# it does not have to be the same data types in the array, You can store anything;
//You can even store objects!
let golfballs = [(gradientBall = {color: "blue", price: 400, speed: 10}), "red ball", "standard white ball", 20];
console.log(golfballs[0]);

function caculateArea()//ex1
{
    let length = 7;
    let width = 3;
    let area = length * width;
    return area;
}

console.log(caculateArea())

function caculateArea2()
{
    let length = 10;
    let width = 10;
    let area = length * width;
    console.log(area);
}

//functions have to be called
caculateArea2()

function caculateSum()//ex2
{
    let Number1 = 50;
    let Number2 = 49;

    if(Number1 == Number2)
    {
         sum = (Number1 + Number2) * 3;
    }
    else
    {
        sum = Number1 + Number2
    }

    console.log(sum)
}

caculateSum();

function ex3()
{
    let no1 = Math.floor(Math.random() * 50);
    let no2 = Math.floor(Math.random() * 50);

    console.log(no1, no2);

    if(no1 == 50 || no2 ==50){
        return true;
    }
    else if(no1 + no2 == 50){
        return true;
    }
    else{
        return false;
    }

    
}


console.log(ex3());

function voltageExcercise(voltage, current)
{
    power = voltage * current;
    return power;
}

