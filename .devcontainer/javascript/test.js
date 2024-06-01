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

//const marvel_super_heros=["captain america","thor","natasha","ironman"]

//const dc_super_heros=["batman","superman","Aquva man","falsh"]

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

//let combined_array=marvel_super_heros.concat(dc_super_heros)
//console.log(combined_array)
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

//const spread_array=[...marvel_super_heros,...dc_super_heros]
//console.log(spread_array)

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


// episode number 16 object indept in java script. ----------------------------------------------------------------------------

// object can be declare in two ways 1 literal 2 constructor 
// the object which is declare  using constructor is called singleton objects. 

// singleton object 
//Object.create()

// object litirals

// object takes values in key value pair
// the keys are  alwase string or js process the keys in string. 


const jsuser={

  name:"Umesh", 
  "lastname":"chaurasiya",
  "full name":"umesh chaurasiya",
  age:26,
  location:"Hyderabad",
  email:"umesh@google.com",
  lastLogInDate:["Monday","Tuesday","Friday"]

}

// how to access the objectts 

//console.log(jsuser.name)
//console.log(jsuser.lastname)
//console.log(jsuser["full name"])
// output 
// Umesh
//chaurasiya
// Umesh chaurasiya
// another way  by using index. ***

//console.log(jsuser["email"])

// now symbol is also primitive datatype now  how to add symbol to object and print its key 
/*
const mySymbol=Symbol("this is symbol")
const jssuser={

  name:"Umesh",
  [mySymbol]:"69696"
}

*/

//console.log(jssuser[mySymbol])

// output 
//69696

//console.log(jssuser)

// how to update object 
//jssuser.name="Umesh Chaurasiya"
//console.log(jssuser)
// to freeze the object we can use object.freez
//Object.freeze(jssuser)
// now whatever operation  performed on this object will not apply. 


// how to add function to obejct. 


/*
jssuser.myfunction = function(){

  console.log("hello hi bye bye")
}

jssuser.myfunctions= function(){
  console.log(`hell hi bye bye ${this.name} `)
}

// how to call the function and get the function refrence 
// it will give refrece 
console.log(jssuser.myfunction)
// it will call the function 
console.log(jssuser.myfunction())

console.log(jssuser.myfunctions())

*/



// object in javascript part 2 episeode 17 ------------------------------------------------------------------------------------
/*
const tinderUser={}

tinderUser.id="abc123"
tinderUser.name="fuckboy"
tinderUser.isLogedIn=false

console.log(tinderUser)

// nesting of objects 

const requlerUsers={
  email:"someOne@gmail.com",
  fullName:{
    userName:{
    firstName:"Umesh", 
    lastName:"Chaurasiya"

    }
  } 
}

console.log(requlerUsers.fullName)
// output  { userName: { firstName: 'Umesh', lastName: 'Chaurasiya' } }

// this is called object chaining
console.log(requlerUsers.fullName.userName.firstName)

// this is used when we are not confirm ki wther this property is exist or not in object. we use if  else in that case. 
console.log(requlerUsers.fullName?.userName.firstName)


// how to  combine one or more object 

const obj1={1:"a",2:"b"}

const obj2={3:"a",4:"b"}

const obj3={obj1, obj2}
console.log(obj3)
// it had given object inside another object
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// to solve this 
// we use assign or spread 

// here first argument is target object and rest are source 
// so it will take all the key value pair from source object and insert it into target object  so target object get modified 
const obj4=Object.assign({},obj1,obj2)

console.log(obj4)
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// use of spred operator
const obj5={...obj1,...obj2}
console.log(obj5)
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// now when we get data from database is it useally  an array of object 

const arrayObject=[
{
  name:"umesh",
  email:"abcd@gmail.com"
},

{
name:"um",
email:"abcd@gmail.com"
}
,
{
  name:"uesh",
  email:"abcd@gmail.com"
}
 ,
{
name:"mesh",
email:"abcd@gmail.com"
}
]

// how to access a perticuler object 
//console.log(arrayObject[0].name)
// umesh

// to loop throught this 

// now how to find the all the keys of perticuler object 

//console.log(Object.keys(tinderUser))
//  output 
// [ 'id', 'name', 'isLogedIn' ]


//console.log(Object.values(tinderUser))
// output 
//[ 'abc123', 'fuckboy', false ]

// entris 

//console.log(Object.entries(tinderUser))
// output 
// create an array of object. 
// [ [ 'id', 'abc123' ], [ 'name', 'fuckboy' ], [ 'isLogedIn', false ] ]

// to find whther perticuler property  is exist inside object or not. 
// property stand for  key 

//console.log(tinderUser.hasOwnProperty('name'))

// output  true

// when we say property is inumerable we  stand to tell ki whether it is repetable , we can apply loop or not. 

*/
// object de center and json api info // episode 18  ------------------------------------------------------------------------------
/*

// note props stand for property not parameters 
// in propes stand property and property stand for key in object. 



// object destructoring 

const course={

  courseName:"JavaScript course", 
  fee:"free", 
  Instructor:"hitesh choudhary"
}


// now to access the property of this course objecr we can use . or there by using object de structor

console.log(course.courseName)
// or we can use 
// output javaScript course

const{courseName,Instructor}=course

console.log(courseName)
console.log(Instructor)
// output javaScript course
// hitesh choudhary
// even we can give diffrnet name to  property 

const{Instructor:teacher}=course
console.log(teacher)
// output hitesh choudhary 


// what is json 
// json is  nothing but  responce which we get from the  backend or server  from AIP. 
// json is 99percent similer to object. 
// only diffrence is in json key are in ""(double quotes)
// this json does not have any name  as compare to object
// this api resopnce is in object form
/*
{

  "name":"Umesh Ramharakh Chaurasiya", 
  "age":26, 
  "Gender":"male"

}
*/

// certain time we get the api respoce in array of object. 

// [{},{},{}]



// function and paramet and memory management in javascript part 19--------------------------------------------------------------------------------------
/*

function sayMyname(){
console.log("U")
console.log("M")
console.log("E")
console.log("S")
console.log("H")
}
// this is refrece of function. 
//sayMyname
// this is calling the function or exectuing the function
//sayMyname()

function addTwoNumber(number1,number2){
  console.log(number1+number2)
  //console.log(number1)
  //console.log(number2)

}

//addTwoNumber()

//output 
//NaN
//undefined
//undefined

addTwoNumber(6,9)
// 15

addTwoNumber(3,"2-1-0")
// 32-1-0

addTwoNumber(null,null)
// output 0  // interesting cases 

// when function does not return anythig 

let output=addTwoNumber(3,6)
console.log(output)
// undefined as function does not return anything so we are shorted. 
// here scope of number1 number2 and number3 are local. i.e in block only 
function add3NumberWithRetuern(number1,number2,number3){
  return number1+number2+number3
}

let result=add3NumberWithRetuern(3,6,9)
console.log(result)
// output 18

function loginUserMessage(user){

  return `Hi ${user} has just login`
}

//let message=loginUserMessage("Umesh")
//console.log(message)
// output Hi Umesh has just login

//let message=loginUserMessage()
//console.log(message)
// output 
// Hi undefined has just login

let message=loginUserMessage(null)
console.log(message)
// output
// Hi null has just login

// undefined is consider to be an false value 

function loginUserName(username){

  if(!username){
    console.log("please enter your username")
    return
  }

  return `Hi ${username} has just login`
}


console.log(loginUserName())
//output 
//please enter your username
//undefined

// to pass default valuse in parameter  oginUserName(username="sam")
// so if username is not provided in that case default value will passs to it. 
// And if argument passs  then default value will overwrite. 
  */
// fuction with object and array in javascript part 20---------------------------------------------------------------------

/*
// now suppose  we have to pass dynamic number of argumen to function. 
// or we don't know how many argent will be going to pass this function so for that we use rest opratir 

// example of rest and spred both syntax is similer 
// ...variablename

function calCulatePrise(...var1){
  return var1; 
}

console.log(calCulatePrise(100,200,300,2000))
// [ 100, 200, 300, 2000 ]

function calCulatePrises(var1,var2,...var3){
  return var3; 
}
console.log(calCulatePrises(100,200,300,2000))
// output [ 300, 2000 ]


// pasing an object to function as argement 


const user={
  userName:"umesh",
  prise:169

}

function handleObject(anyObject){
  console.log(`Hi ${anyObject.userName} and prise is ${anyObject.prise} `)
}

//handleObject(user)
// Hi umesh and prise is 169 

handleObject({

  userName:"hitesh",
  prise:269
})
// output
//Hi hitesh and prise is 269 


// passing array to function 

const myArray=[100,200,300,400,500]

function handleArray(arg1){

  return arg1[0]
}


console.log(handleArray(myArray))
// 100
*/

