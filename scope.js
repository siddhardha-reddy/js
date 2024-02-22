var x=10;  //global declartion
{
    // var y=10;
    console.log(x);
}
console.log(x);
{
    var x=12;
    console.log(x);
}
let y=17;
{
    let y=34;
    console.log(y);
    y=344;
    console.log(y);
}
var x=22;
console.log(y);
console.log(x);
const g=100;
{
    // g=234;
    console.log(g);
    console.log(typeof(g));
}
//non primitive datatypes
// arrays,objects
//naming :-
/*
    -only  $ and _ are allowed
    -we usually use cammel case for writing the variable names
    -we can start a variable with 
    alphabet
    _
    $
    where as at the middle we can use 
    alphabet
    special characters(_,$)
    numbers
*/ 
t=true;
console.log(typeof(t)); //boolean
d=null;
console.log(typeof(d));  //object
m=undefined;
console.log(m);
console.log(typeof(m));  //undefined
// f=12357457434807534.945678;
f=BigInt(12357457434807534.945678);
console.log(f);
console.log(typeof(f))
var gc=Symbol("hii");
console.log(gc);
console.log(typeof(gc));
//object
// we can store diff types of data types in an object 
ex =["hii",10,Symbol("hii")]
console.log(ex[0])

// accessing particular we can use index

var gk={
    name:"siddhardha",
    age:22
}
console.log(gk);
console.log(gk.name)
console.log(typeof(gk))
var i=[
    {
        name:"ramu"
    },
    {
        name:"sreenu"
    },
    {
        name:"andrew"
    }

]
console.log(i)
console.log(i[1].name)