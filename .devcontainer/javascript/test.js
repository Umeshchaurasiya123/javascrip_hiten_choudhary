// console.log("Hello World");


// // var const and let keyword in javascript. 

// const accoundID=12345; 

// let accountEmail="abcd@gmail.com"

// var accountPassword="12345"

// let accountState; 

// accountCity="mumbai"

// // accondID=2  not allowed. 

// accountEmail="pqrs@gmail.com"

// accountPassword="ashwniloveumesh"

// accountCity="bihar"

// console.table([accountCity,accountState,accountPassword,accountEmail,accoundID])


// chai and code  episoe number 5

"use strict"; //  treat all the js code as newver version. 

//alert(1+2+3) we are using node not browser it will give eror. as in browser javascrit run in binding with html. 

// null is standalone value and undefine is not an value. 

// symbol -> use for uniquness of components. 


// object

// console.log(typeof null);        // object
// console.log(typeof undefined);   // undefined


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



// console.log("episode 8 data type conversion ")

// console.log(null==0)
// console.log(null>0)
// console.log(null<=0)
// console.log(null>=0)

// console.log(undefined==0)
// console.log(undefined>=0)
// console.log(undefined<0)

// strict cheking 
// ==== check even data type as well 
// // == data type not cheked here

// console.log("2"==2)
// console.log("2"===2)

// epidsoe 9

// javascript data type primitive and non primitive. 
//  primitive (non refrence)
//  String , Number , Boolean ,null , Symbol , undefined , BigInt

// non primitive (refrece)
// Array, function, Objects. 
// not primitive  data type returb type are object. 
// function it self is  object function. 

/*
const Id=Symbol(123)
console.log(Id)
// output Symbol(123)
const IDD=Symbol(123)
console.log(IDD)
// output Symbol(123)
console.log(Id===IDD)
// fasle 


const  alphabets =['a','b','c'];


const funVariable=function() {

    console.log(" this is my function");
}

const myObj={

    name:"Umesh Chaurasiya",
    age:25, 
    sex:"vergin", 
    favNumber:69, 
}

console.log(typeof myObj )

console.log(typeof funVariable )

console.log(typeof alphabets )
*/

// episode 10  stack and heap memory types/ 

// primitive data types use stack while non primitive data types usess the heap memory data types. 

// in stack you get the copy of data(primitive data types ) and in heap you will get refrence of data.(non primitive data types)

 // stack (copy of data)
// let myname="umesh chaurasiya"

// let names=myname;

// myname="pres"; 

// console.log(myname);

// console.log(names);



// // heap (refrence of data)

// const objectOne ={

//     mail:"abcd@gmail.com",
//     gender:"male", 
//     age:25
// }

// const objectTwo =objectOne; 

// objectTwo.mail="ashwini@gmail.com"


// console.log(objectOne);

// console.log(objectTwo);


// episode 11 string in javascript -------------------------------------


// string concatination 

// let wtf="something" 

// let value=69

// console.log(wtf+" "+value+" string concatination we are doding ");

// // good waty of doign this is string interpolation.  

// console.log( `this is good way of doing the string interpolation let me print the value ${wtf} now add some more values ${value}`);

// // do use some string function. 


// const mystrng=new String('first value')

// console.log(mystrng)
// console.log ( typeof mystrng)

// // this string is obejct  it  contains lot of properties as well as to many method as well in side prototype. 

// console.log(mystrng.__proto__)

// console.log(mystrng[0])

// console.log(mystrng.toLowerCase)

// console.log(mystrng.split(' '))



//  Number and  math in java script episode 12 --------------------------------------------------------------------

// // Numbers 


// const score=699
// console.log(score)

// // specifically telling ki we need number 
// const balance=new Number(200.8234)
// console.log(balance)

// console.log(balance.toString().length)

// console.log(balance.toFixed(2))

// console.log(balance.toPrecision(4))
// console.log(balance.toPrecision(3))

//const hundrest=1000000
// // based on us dolller 
// console.log(hundrest.toLocaleString())

// // based on india rupees. 
// console.log(hundrest.toLocaleString('en-IN'))

// math function in java script --------------------------------------------------------------------------------

// it is an object which contains lot of properties as well as methods. 
// to look at  avaialble properties as well as method look at the math object inside console in browser. 
//console.log(Math)

// abs to male value positive 
//console.log(Math.abs(-10))

// round function 
//console.log(Math.round(4.5))
// 5
//console.log(Math.round(4.4))
//4 

//console.log(Math.floor(3.3))
// 3
//console.log(Math.ceil(3.5))
// 4


// math.randome give value between 0 and 1 

// to get the number betwene perticuelr range 

// const max=30;
// const min=20; 

// console.log(Math.floor(Math.random()*(max-min+1)+min))


// episode number 13 date and time in javascript. -----------------------------------------------------------------------

//let mydate=new Date(); 
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON())
// console.log(mydate.toTimeString())

//let mydates=new Date(2024,1,24)

//console.log(mydates.toString())

//mydates=new Date("2024-05-24")  // date in yyyy/mm/dd
//console.log(mydates.toString())

//mydates=new Date("05-24-2024")  // date in mm/dd/yyyy
//console.log(mydates.toString())

// suppose if we want to find the peticuler time or have to compare those time. 
// or while designing the quzz. who gave the fastest anser  to desite that. 

// it will retuen the number  of milisecoud form 1st of jan 1970 to till now 
//const mytime=Date.now(); 
//console.log(mytime)
// 171671656184 now finding details from it is somewhat difficult. 

// now suppose the quize start from 2024-may-30 at 12:00 PM. 

//const quizetime= new Date(2024,5,30,12,0,0,0)
//console.log(quizetime)
// it will return the stores date which is 2024-05-30 12PM  from 1st jan 1070 in millisecound 
//quizetime.getTime()

//console.log(quizetime.getTime())

// now we can easilly calulate both of those time and find out which one is faster. 


// to convert millisecound into the secound  divide it by 1000 as well as use math.floor function to get rid of decimal points. 

// const newDate=new Date(); 

// console.log(newDate.getDate())
// console.log(newDate.getMonth())


// console.log(`to do the interpolation with date and time so  today date is ${newDate.getDate()} and month is ${newDate.getMonth()}
// and year is ${newDate.getFullYear()} and time is ${newDate.toTimeString()}
// `)


// newDate.toLocaleString('default',{
//     weekday:"long",
//     timeStyle:"medium",
// })

//console.log(newDate)

// arrays. episode 14 ---------------------------------------------------------------------------------

//const numbers=[1,2,3,'abcd']

//console.log(numbers)

//console.log(numbers[0])

//console.log(numbers[numbers.length-1])


// another way of creating an array. 

//const arraysNumbers=new Array(1,2,3,'wtf')

// array methods

//arraysNumbers.push(12)
//arraysNumbers.push(13)

//arraysNumbers.pop()
//console.log(arraysNumbers)

// unshif insert the value at the start of array. 
// but it make performance week as if array contain 100k of elelment then  it will impact the performance. 

//arraysNumbers.unshift(12233234)
//console.log(arraysNumbers)

//arraysNumbers.shift()
//console.log(arraysNumbers)

// include  and indexof  return boolean
// join  add all the array element into the string seperate by , 

//console.log( typeof arraysNumbers.join())

// slice and splice 
// slice do not manupulate the original array but splice does. 

// episode number 15 Array part 2 -------------------------------------------------------------------------------------

const marvel_super_heros=["captain america","thor","natasha","ironman"]

const dc_super_heros=["batman","superman","Aquva man","falsh"]

// push push one arrray inth another and it also modified the originam array 

//console.log(marvel_super_heros.push(dc_super_heros))

//console.log(marvel_super_heros)

// output 
/*
[
    'captain america',
    'thor',
    'natasha',
    'ironman',
    [ 'batman', 'superman', 'Aquva man', 'falsh' ]
  ]

*/

// concate mmethod 

let combined_array=marvel_super_heros.concat(dc_super_heros)
console.log(combined_array)
/*
[
  'captain america',
  'thor',
  'natasha',
  'ironman',
  [ 'batman', 'superman', 'Aquva man', 'falsh' ]
]
@Umeshchaurasiya123 ➜ /workspaces/javascrip_hiten_choudhary (main) $ node .devcontainer/javascript/test.js
[
  'captain america',
  'thor',
  'natasha',
  'ironman',
  'batman',
  'superman',
  'Aquva man',
  'falsh'
]
*/

// more elegent way to do this is by using spread array. 

const spread_array=[...marvel_super_heros,...dc_super_heros]
console.log(spread_array)

/*
[
  'captain america',
  'thor',
  'natasha',
  'ironman',
  'batman',
  'superman',
  'Aquva man',
  'falsh'
]
*/

//const another_array=[1,2,3,[4,5,6,[7,8,[9,10,[11]]]]]

//  we can exact all thsoe array into sigle array by usign .flate(infinity). infinity mentioned the level of array. 
// can be put 1 , 2 up to level we neeed to extract. 

//const output_of_array=another_array.flat(Infinity)

//console.log(output_of_array)

// output 
/*
[
   1, 2, 3, 4,  5,
   6, 7, 8, 9, 10,
  11
]
*/

//console.log(Array.isArray("umesh"))
//console.log(Array.from("Umesh"))
/*
false
[ 'U', 'm', 'e', 's', 'h' ]
*/
//console.log(Array.from({name:"umesh chaurasiya",
//age:26, 
//gender:"male"
//}))

// output []  // interesting case 

//let score1=100; 
//let score2=200;
//let score3=300; 

//console.log(Array.of(score1,score2,score3))

// output 
//[ 100, 200, 300 ]





























