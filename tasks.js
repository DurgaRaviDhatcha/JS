// for (i= 0; i <=100 ; i++) {
   
// console.log("print"+i)
// }

//  var a = 25
//  var b = 5
// console.log(a%b)

// const num = Boolean(' ')
// console.log(num , typeof num);

// let num = 0
// if (num % 2 == 0) {
//     console.log("num is even");. n 
// } else {
//     console.log("num is odd");
// }

// let num1 = 31
// let result
// result = (num1%2==0) ? "Num is even" : "Num is odd"
// console.log(result);

// var num = 5
// --num
// console.log(num);

// let num = 55
// let a = num++
// console.log(a ,  num);

// let a =  "mango"
// let b =  "5"
// let result = (a/b)
// console.log(result , typeof(result));

//console.log(Boolean(undefined))

// let num = 3
// let num1 = 12
// let result = num1 % num
// console.log(result);


// const a = 3;o9l
// const b = 2;

// console.log(!(a > b));

// let name = "Durga"
// let std  = "MCA"
// console.log(`I'm ${name} pursuing ${std}`);

//console.log(`Hello, My fav 'cartoon' is "Doraemon"`);

// let num1 = 50
// let num2 = 55
// let total = num1+num2
// console.log(`The addition of ${num1} and ${num2} is ${total}`);

// console.log(`My fav foods are:
//                 "Biriyani"
//                 "Grill"
//                 "Barbeque"`)


//console.log(`Hello, I'm Durga \t I'm pursuing MCA`)

// function welcome()
// {
//     console.log("Home sweet home");
// }
// welcome();

// function work()
// {
//   return "it Trident"
// }
//let str = work();
//console.log(str);
//console.log(work());

// function employer(employee , employee1)
// {
// return `Hai ${employee}
// Hai ${employee1}` 
// }
// let employee = "Durga";
// let employee1 = "Doraemon";
// let str = employer(employee , employee1);
// console.log(str);

// let math = function(val1,val2)
// {
//     return val1 + val2
// }
// let result = math(7,6)
// console.log(result);


// let math = (val1,val2) =>  val1 + val2

// let result = math(7,6)
// console.log(result);

// let math = () => {
// console.log("Hello JS");
// return 1;
// }
// //let result = math();
// console.log(math());

// let welcome = (user) => {
//     console.log(`Hello ${user}`);
//     return 1;
//     }
//     let user = "Durga";
//     console.log(welcome(user));
    
// let data = ["Durga", 5 , {cartoon: "Doraemon"} , function () {console.log("Hello everyone");}];
// data.push = (11);
// console.log(data);
// data[3]();

// let values = [1,2,3,4]
// console.log(values.push(6));
// console.log(values);

//let values = [1,2,3,5,6]
//console.log(values.push(6));
//console.log(values.indexOf(1));

 //console.log(values.pop());
//console.log(values.shift());
 //console.log(values.unshift(10));
 //console.log(values.splice(1));
//  console.log(values.splice(1,1, 10,15));
// console.log(values);

//for of loop in Array 
// let num = [];
// num [0] = 1;
// num [9] = 9;

// console.log(num);
// //console.log(num.length);
// for (const n of num) {
//     console.log(n);
// }
// console.log("*************************")
// for(let key in num){
//     console.log(num[key]);
// }

//Objects in JS

// let cartoons = {
//     Name: "Doraemon",
//     Channel: "Disney",
//     'Diff Cartoons':{
//         Name: "Doc McStuffins",
//         Channel: "Nick Junior"
//     }
// }
//delete cartoons.DiffCartoons
                               // if (cartoons.DiffCartoons.Name === undefined) {
                               //     console.log("not available");
// // }
// for(let key in cartoons){
//     console.log(key, cartoons[key]);
// }
// for(let key in cartoons["Diff Cartoons"]){
//     console.log(key, cartoons["Diff Cartoons"][key]);
// }
//console.log(cartoons['Diff Cartoons']);
//console.log(cartoons.DiffCartoons.Name1?.length);

//for each() method in Array

// let values = [10,20,30,40,50]

// values.forEach((result, i, values) => {   //using arrow fn
//     console.log(result, i, values);  
// });

// let values = [10,20,30,40,50]
// values.forEach(function element(values, i, element)  {    //using normal fn
//     console.log(values*2,i,element);
// });

//filter() method 

// let values = [75,52,67,88,92,24]

// values.filter(result => result%2===0)
//     .forEach((result) => {   //using arrow fn 
//     console.log(result);  
// });

// map() and reduce() method

// let values = [75,52,67,88,92,24]

// let total = values.filter(result => result%2===0)
//     .map(result => result*2)
//     .reduce((a,b) => (a+b))

// console.log(total);


// let nums = [1,2,3,4]
// nums.push(7)
//console.log(nums.push(7));
//console.log(nums.indexOf(8))
// console.log(nums);
// console.log(nums[1]);

let nums = [1,2,3,4]
nums.push(7)
console.log(nums);
console.log(nums[1]);  //getting index value





