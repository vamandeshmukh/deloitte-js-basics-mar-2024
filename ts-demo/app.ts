// app.ts

// npm install --location=global typescript 
// npm install typescript 
// tsc -v

// TypeScript provides type safety to JavaScript  
// write ts code -> transpile -> js code -> run the code 

// process 
// write code in app.ts 
// tsc app.ts 
// app.js will be generated 
// node app.js 
// -----------

// ts config 

// npx tsc --init
// OR 
// tsc --init
// ts config will be generated 
// henceforth, 
// tsc 
// dist folder will be generated and 
// in that app.js will be generated 
// node dist/app.js 





// let salary: number = 10.5;
// console.log(salary);

// salary = 12.75;
// console.log(salary);

// // salary = 'abc';
// console.log(salary);


// let salary: number = 20;

const addNums = (a: number, b: number): number => {
    return a + b;
    // return 'abc'; // error 
};

console.log(addNums(10, 20));


