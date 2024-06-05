
// How does javascript execute code + call stack

// so jo bhi hum code likhte hai .js file mai. 
// 1st javascript use global execution context (global environent is prepared) prepate banata hai. 
// now use global exection context  ko this keyword kai ander refered kiya jata hai.  
//  NOTE so browser ka exection contest alag hota hai. use ka windoes object hota hai. 
// node invironment mai alag hota hai. 

// there is Another exection context which is called function execution context. 

// ones globla execution context is prepeared than it run on 2 phases
// 1 memory creation phase here memory is allocated to variables 
// 2 exection phase where exection of program is happend. 

// so jo bhi code run kar na ho wo sabse pahle globla exection context ya environment ki help sia run hota hai. 
// is sabse pagle this keyword mai stored kiya jata hai ya fir refered kiya jata hai. 
//-------------------------------------------------------------------------------------------------
// so basically whenever we write a program so first globla exection context is prepared whiich is nothing but some environemnt. 

// with that exection context a memeory cration phase is also run.where menory allocation is also done .
// whatever variable we have created memeory is allocated to them 
// and undefied is assign to them. 
// 
// and finally exetuion is start line by line like value is assign to vaiables and function called is done. 
// in function call new exection context is prepared which is run on thread. 
// now in this exetion context again memory alloation phase then exetion phase is done return the value to global exection context. 

