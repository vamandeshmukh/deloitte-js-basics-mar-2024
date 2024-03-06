// console.log('02-async-js.js');

// args to functions

// const fun = (arg) => {
//     // console.log(arg * 2);
//     console.log('Hi ' + arg);
// };

// // fun(10);
// fun('Sonu');

// const fun = (arg) => {
//     console.log(arg.city);
// };

// // fun({city: 'Pune'});
// // fun({city: 'Pune', pin: 400001});


// // callback function

// const fun = (arg) => {
//     console.log('fun function called');
//     arg();
// };

// // fun(() => { });

// const anotherFun = () => {
//     console.log('named function called')
// };

// fun(anotherFun);

// fun(() => {
//     console.log('anonymous function called');
// });

// const fun = (arg) => {
//     console.log(arg * 2);
// };

// // way 1 - anonymous value
// fun(10);

// // way 2 - named value
// const num = 25;
// fun(num);

// =====================================
// What's the use of callback functions?
// =====================================

// const getValue = () => {
//     return { message: 'Have fun!' };
// };

// const myValue = getValue();
// console.log(myValue.message);

// ========================== 
// Problem of asynchronous JS 
// ========================== 

//     // setTimeout(arg1, arg2);
//     // setTimeout(() => {}, 500);


// const getValue = () => {
//     setTimeout(() => {
//         return { message: 'Have fun!' };
//     }, 500);
// };

// const myValue = getValue();
// console.log(myValue.message); // TypeError: Cannot read properties of undefined (reading 'message')


// ============================== 
// Solution 1 - callback function  
// ============================== 

// const getValue = (callback) => {
//     setTimeout(() => {
//         callback({ message: 'Have fun!' });
//     }, 500);
// };

// getValue((myValue) => {
//     console.log(myValue.message);
// });

// ===================== 
// Solution 2 - Promise  
// ===================== 


// return new Promise();
// return new Promise(() => { });
// return new Promise((resolve, reject) => { });

const getValue = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getValue function called');
            resolve({ message: 'Have fun!' });
        }, 500);
    });
};

// getValue()
//     .then()
//     .catch();

// getValue()
//     .then(() => {})
//     .catch(() => {});

getValue()
    .then((response) => { console.log(response.message); })
    .catch((error) => { console.log(error); });
