//#1
for (let i = 0; i < 3; i++) {
    console.log("Hello, world!");
  }

//#10
var number1 = prompt("ex10 First number");
var number2 = prompt("ex10 Second number");
if(number1==number2) {
    console.log("Equal");
}
else {
    console.log("Not equal");
}

//#14
var number1 = prompt("ex14 First number");
var number2 = prompt("ex14 Second number");
var number3 = prompt("ex14 Third number");

if(number1>number2) {
    if (number1>number3){
    console.log("First number is the greatest");}
    else{
        console.log("Third number is the greatest");
    }
}
else {
    if (number2>number3){
        console.log("Second number is the greatest");}
        else{
            console.log("Third number is the greatest");
        }
}