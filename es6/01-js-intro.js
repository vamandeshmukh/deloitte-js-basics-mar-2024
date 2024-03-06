
// console.log('JS intro');

// num1 = 10; // do not use 
// var num2 = 20; // do not use 
// const num3 = 30; // use this as default 
// let num4 = 40; // use this as well 

// // int num5 = 50;  // java 

// // console.log(num3);
// // // num3 = 35; // TypeError: Assignment to constant variable.
// // console.log(num3);

// console.log(num4);
// num4 = 45; // this works
// console.log(num4);
// num4 = 'abc';
// console.log(num4);
// num4 = false;
// console.log(num4);


// // let firstName = "Sonu";
// // let firstName = 'Sonu';
// let firstName = `Sonu`;

// // let salary = 10;
// let salary = 10.5;


// if (firstName == 'Sonu')
//     console.log(firstName);
// else
//     console.log('Monu');

// // array 
// const myArray = [10, 20.25, false, 'Abc', null];

// object 

// const employee = {
//     eid: 101,
//     firstName: 'Sonu',
//     lastName: 'Singh',
//     salary: 10.5,
//     isMarried: false,
//     phones: [9876, 9809],
//     address: { city: 'Mumbai', pin: 400001 }
// };

// // console.log(employee);
// console.log(employee.firstName);

// // object 
// const employee = { firstName: 'Sonu', lastName: 'Reddy' };

// // object destructuring 
// let { firstName, lastName } = employee;

// console.log(firstName);

// arrow functions 

// // old JS 

// function fun1() {
//     console.log('fun1 called');
// };

// fun1();

// // new js arrow function 

// const fun2 = () => {
//     console.log('fun2 called');
// };

// fun2();


// classes in JS 

// class Employee {

//     constructor(firstName, salary) {
//         this.firstName = firstName;
//         this.salary = salary;
//     };

//     printSalary() {
//         console.log(this.firstName + ' gets ' + this.salary);
//     };
// };

// const emp = new Employee('Sonu', 10.5);
// emp.printSalary();


// for of loop, for in loop 

// const myFriends = ['Sonu', 'Monu', 'Tonu'];

// console.log(myFriends);

// for (let friend of myFriends) {
//     console.log(friend);
// }

// // array functions 

// const prices = [2, 6, 5, 3, 8, 4];
// console.log(prices);
// let increseasedPrices = prices.map(price => price * 2);
// console.log(increseasedPrices);
// let evenPrices = prices.filter(abc => abc % 2 === 0);
// console.log(evenPrices);

// default args to functions 

// const addNums = (a, b) => {
//     console.log(a + b);
// };

// addNums();
// addNums(10);
// addNums(10, 20);
// addNums(10, 20, 30);

// spread syntax 

// const nums = [10, 20, 30];
// const moreNums = [...nums, 40, 50, 60];

// console.log(moreNums);

// rest parameters 

const addNums = (...args) => {

    return args.reduce((total, nums) => total + nums, 0);

};

console.log(addNums(10, 20));
console.log(addNums(10, 20, 30));
console.log(addNums(10, 20, 30, 40));

// template literals 
