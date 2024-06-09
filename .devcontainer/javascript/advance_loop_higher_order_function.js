// Advance loops. 
// for of loops 
// maps are iterable but object not. 
// map is like array of object. 
// for of loop give value  and for in  loop give value 

const myArray=["js","python","C++","typescript"]

const myString =" this is javascript string"
for (const iterator of myArray) {
    
   // console.log(iterator)
}

for (const iterator of myString) {
 //   console.log(`Each character of string  ${iterator}`)
}


// map
// map is similar to object or array. it store key value pair. 
// key in maps are unique. 

const maps =new Map()

maps.set("IN","India")
maps.set('USA',"United state of india")
// maps.set(FR,"France") give eror 
 maps.set('FR',"France") 
 maps.set('FR',"Fran") 

//console.log(maps)

// // out put 
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United state of india',
//     'FR' => 'Fran'
//   }
// so key shoud be unique and value is stored the latest value corresponding to key. 
// if ley and valye  both are same than it is not stored. 


// can i able to apply loop on this map ? 

for (const iterator of maps) {
   console.log(iterator)
}

// it gave me key value pair as single elemebt in array
// [ 'IN', 'India' ]
// [ 'USA', 'United state of india' ]
// [ 'FR', 'Fran' ]

// how to destructor this array. 

for (const [key,value] of maps) {
  // console.log(key, value)
}

// IN India
// USA United state of india
// FR Fran

// can object do the same iteration as map .

const myObject={

   name:"Umesh", 
   age:26
}
// object are not iterable. but maps are. 

// for (const iterator of myObject) {
//    console.log(iterator)
// }
//------------------------------------------------------------------------
// so object pai loop lagana hoga for in loop le lege. 
// array or map which is also an array of object to for of loop lele ge. 
// 
// ---------------------------------------------------------------------------
// for in loop does not work for map can it gove  keys. 

// if you have to iterator over  object than forin loop can be helpfull 

for (const key in myObject) {
   
  // console.log(key)
}

// output 
// name 
// age
// -----------------------------------------------------------------------------------------

// most used loop foreach loop 
// -----------------------------------------------------------------------------------

myArray.forEach((item,index,array)=>{

   console.log(item,index,array)
})

function printSomething(items){
  // console.log(items)
}

// give refrecne of function not call them. 
myArray.forEach(printSomething)

// senario when we have array of object. 

const arrayOfObjects=[
   {

      language:"C++",
      languageFileType:"cpp"

   },

   {

      language:"python",
      languageFileType:"py"
   
   },

   {

      language:"java",
      languageFileType:"java"
      
    }
]

arrayOfObjects.forEach((value)=>{

   console.log(value.language)
   console.log(value.languageFileType)

})





