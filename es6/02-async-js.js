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


// callback function 

const fun = (arg) => {
    console.log('fun function called');
    arg();
};

// fun(() => { });

const anotherFun = () => {
    console.log('named function called')
};

fun(anotherFun);

fun(() => {
    console.log('anonymous function called');
 });


// const fun = (arg) => {
//     console.log(arg * 2);
// };

// // way 1 - anonymous value
// fun(10);

// // way 2 - named value
// const num = 25;
// fun(num);
