//#1
function hello (){
    for (let i = 0; i < 3; i++) {
        console.log("Hello, world!");
    }
}
hello()

//#10
function equal () {
    var n1 = 0.5;
    var n2 = 0.5;
    if (n1==n2) {
        console.log("Equal");
}
    else {
        console.log("Not equal");
}
}
equal()

//#14
function compare () {
    var n3 = 7;
    var n4 = -99;
    var n5 = 2.63;

    if(n3>n4) {
        if (n3>n5){
        console.log("First number is the greatest");}
        else{
            console.log("Third number is the greatest");
    }
}
    else {
        if (n4>n5){
            console.log("Second number is the greatest");}
            else{
                console.log("Third number is the greatest");
        }
}
}
compare()