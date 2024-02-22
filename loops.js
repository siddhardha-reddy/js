// we have 3 types of loops in js they are
// while,do-while and for loop
// syntax while(condition){ code to be executed}
let i=10;
do{
    console.log(i);
    i--;
}while(i>0)
i=1;
while(i<10){
    console.log(i);
    i=i+1;
}
// for(expression-1;expression-2;expression-3){//code to be executed}
var one=[1,2,3,4]
for(let x in one){
    console.log(x)//here x denotes the index of the array
    console.log(one[x]);//this will provied the value as o/p
}
