console.log("Hello World");


// var const and let keyword in javascript. 

const accoundID=12345; 

let accountEmail="abcd@gmail.com"

var accountPassword="12345"

let accountState; 

accountCity="mumbai"

// accondID=2  not allowed. 

accountEmail="pqrs@gmail.com"

accountPassword="ashwniloveumesh"

accountCity="bihar"

console.table([accountCity,accountState,accountPassword,accountEmail,accoundID])


// chai and code  episoe number 5

"use strict"; //  treat all the js code as newver version. 

//alert(1+2+3) we are using node not browser it will give eror. as in browser javascrit run in binding with html. 

// null is standalone value and undefine is not an value. 

// symbol -> use for uniquness of components. 


// object

console.log(typeof null);        // object
console.log(typeof undefined);   // undefined


// episode number 6

// this is for number function Number()
// "33" => 33
// "33abc"=> Nan // not an number its type is even number 
// true=1 ; fasle =0 

// this is for Boolean function Boolean()
// 1=> true ; 0=> fasle 
// "" => false
// "umesh" => true

// now for String function String()

// operation ------------------------------------------------------------------------------------------------------------------

// episode 7 

// episode 8 
// Comparison of datatypes in javascript

// not equality (==) and comparison (=> , <=, >, >) work diffrently

//  comparison convert null to 0  that why  console.log(null<=0) ,console.log(null>=0) is true. 



console.log("episode 8 data type conversion ")

console.log(null==0)
console.log(null>0)
console.log(null<=0)
console.log(null>=0)

console.log(undefined==0)
console.log(undefined>=0)
console.log(undefined<0)

// strict cheking 
// ==== check even data type as well 
// == data type not cheked here

console.log("2"==2)
console.log("2"===2)





