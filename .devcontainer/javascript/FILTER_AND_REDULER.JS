// VIDEO NUMBER 30

const myArray=["python", "javascript", "java","sql"]

const numArray=[1,2,3,4,5]
const value=myArray.forEach((val)=>{

    return val; 
})

//console.log(value)
//  output undefined 
// foreach loop does not return anything 

const myFilter=numArray.filter((item)=>{

    return item>2;
})


//console.log(myFilter);

// note filter retuern only those which is true/

// map return all the elements .

// here we are doing  chaning of method. 

// here whateber the output of first map produce it is used by  2nd map and output of 2nd map is used by 3rd filter. 
// after that final  resultent array is stored in connst outPutArray. 

const outPutArray=numArray.map((item)=>{ return item+1}).map((item)=>{return item-1}).filter((item)=>item>3)
console.log(outPutArray)


// reducer. 

// reducer is a function WHO TAKE  ONE CALL BACK FUNCTION  AND ONE INICIAL VALUE CALLED ACCUMULATOR. 
// THE CALLBACK FUNCTION TAKE TWO PARATER  FIRST ACCUMULATOE AND 2ND ARRAY ITEM. 


const result= myArray.reduce((ACCUMULATOE,current)=>{    
    return ACCUMULATOE+current
},0)

console.log(result)

// output concate the string  
//0pythonjavascriptjavasql


const result1= numArray.reduce((ACCUMULATOE,current)=>{    
    return ACCUMULATOE+current
},0)

console.log(result1)
// output 15

