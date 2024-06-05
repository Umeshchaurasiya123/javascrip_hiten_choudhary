
//Control flow in javascript in 1 shot | chai aur #javascript lecture 25

// implesit scope 
//const balance=100; 

//if(balance>=100) console.log(`current balance is ${balance}`)

//  switch (key) {
//     case value:
        
//         break;
 
//     default:
//         break;
//  }


 // truthy value // which is consider to  be true  
//false , 0,-0, BigInt 0n,"",null,undefined, NaN

 // falsy values // which is consider to be an false. 
//"0",'false'," ",[],{}, function(){}-> this is called empty function

// how to check whether array is empthy or not. 

const myArray=[1,2,3]

//console.log(myArray.length)
if(myArray.length===0){
    console.log("Array is Empty")
}

// how to check object is Empty or not

const myObject={name:"Umesh", age:26}

console.log(Object.keys(myObject))

if(Object.keys(myObject).length===0) {
    console.log("Object is empthy") 
}
else {
    console.log("Object is not empthy") 
    
}



// Nullis collison operator  represnt by ??

// this is mostly used incase of database calling
// sometime database does not responce and there is also possibily of null return from database

// so all in that call nullis collison operator is usead 

// Example 

let val1,val2,val3,val4; 
let val5;
let val6;
val1= 5??10

val2=null??10

val3=undefined??15

val4=16??undefined

val5=null??undefined??100; 

val6=undefined??100??200; 

console.log(val5)
console.log(val1)
console.log(val2)
console.log(val3)
console.log(val4)
console.log(val6)

// null || undefined ?? "foo"; // raises a SyntaxError
//true && undefined ?? "foo"; // raises a SyntaxError


//(null || undefined) ?? "foo"; // returns "foo"

