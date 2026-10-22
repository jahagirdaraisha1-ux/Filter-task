// // task 1

// let cars = ['BMW','mercedes','rolls-royce','lamborghini'];
// cars.forEach(function(cars){
//     console.log(cars)
// })

// // task 2

// let num = [1,2,3,4,5,6,7,8,7,6,5,4,44,33,32,];
// num.forEach(function(num){
//     console.log(num)
// })

// // task 3

// let colors = ['pink','white','green','red'];
// colors.forEach(function(colors){
//     console.log(colors)
// })

// // task 4

// let names = ['rahul','rohit','amit','sachin'];
// names.forEach(function(names){
//     console.log(names)
// })

// // task 5

// let skills = ['css','javascript','html','angular'];
// skills.forEach(function(skills){
//     console.log(skills)
// })


// // Even numbers in forEach

// let numbers = [2,3,4,5,7,6,8,34,,99,77,23,54,56,23,65,69];
// numbers.forEach((params)=>{
// if(params % 2 === 0){
//     console.log(params)
// }
// })

// // odd numbers in forEach

// let number = [2,3,4,5,7,6,8,34,,99,77,23,54,56,23,65,69];
// number.forEach((params)=>{
// if(params % 2 !== 0){
//     console.log(params)
// }
// })

// // forEach in UI task

// let students = ['amit','rahul','riya','aarti','rohit','sachin'];
// const listGroup =  document.getElementById('list-std');

// let result = '<ul class="list-group">'

// students.forEach(function(std){
//     result += `<li class = "list-group-item"> ${std} </li>`
  
// });

// result += `</ul>`;
// console.log(result);
// listGroup.innerHTML = result;

// var companies = [
//     { name: "Company One", category: "Finance", start: 1981, end: 2003 },
//     { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//     { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//     { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//     { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//     { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//     { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//     { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//     { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
// ];


// [
//     {
//         compName : 'company one',
//         lifeSpan : '1981 - 2003',
//         duration : 'Run for 22 years',
//         catg : 'The category is finanace'
//     }
// ]

// // using forloop

// let result1 = [];
// for (let i = 0; i < companies.length; i++){
//     let obj = {
//         compName : companies[i].name,
//         lifeSpan : `${companies[i].start} - ${companies[i].end}`,
//         duration : `Run for ${companies[i].end - companies[i].start} years`,
//         catg : `The category is ${companies[i].category}`
//     }
//     result1.push(obj);
// }
// console.log(result1);

// // using forEach

// let result2 = [];
// companies.forEach((comp)=>{
//     let obj = {
//         compName: comp.name,
//         lifespan: `${comp.start} - ${comp.end}`,
//         duration:`Run for ${comp.end - comp.start} years`,
//         catg : `The category is ${comp.category}`

//     }
//     result2.push(obj);
// });
// console.log(result2);

// using map

// let result = companies.map((params) =>{
//     return {
//         compName: params.name,
//         lifespan: `${params.start} - ${params.end}`,
//         duration:`Run for ${params.end - params.start} years`,
//         catg : `The category is ${params.category}`
//     }
// });
// console.log(result);




// let num = [10,20,30,40,50,60,70,80,90];

// let newArray01 = []
// num.forEach(params =>{
//     let sqt = +Math.sqrt(params).toFixed(2);
//     newArray01.push(sqt);
// })
// console.log(newArray01);


// let num2 = [30,50,40,30,20,10];

// let newArray02  = []
// for(let key in num2){
//     let dbno = num2[key]*2;
//     newArray02.push(dbno);
// }
// console.log(newArray02);

//----------------------------------------------------------map task--------------------------------------------------------
// using map method 
// task 1
// let num1 = [77,65,78,98,43,45,23,12];
// let doubleNum = num1.map(function(count){
//     return count * 2
// });
// console.log(doubleNum);

// task 2
// let num3 = [34,70,40,50,30,10];
// let double = num3.map(function(param){
//     return param * 2
// });
// console.log(double);

// // task 3
// let num4 = [2,4,6,8,10];
// let multi = num4.map(function(num){
//     return num * 2
// });
// console.log(multi);

// // task 4
// let num5 = [2,3,5,6,7];
// let triple = num5.map(function(fun){
//     return fun * 3
// });
// console.log(triple);

// // task 5
// let num6 = [10,20,30,40,50];
// let add = num6.map(function(result){
//     return result + 5
// });
// console.log(add)

// // task 6
// let num7 = [2,3,4,5,6];
// let square = num7.map(function(let){
//     return let * let
// });
// console.log(square)
//--------------------------------------------filter task-------------------------------------------------------
// Filter task
// task 1

let numbers = [10, 25, 30, 45, 50, 60, 15];
let num = numbers.filter((num)=>{
    return  num >= 30;
});
console.log(num);

// task 2

let numbers0 = [20,50,67,54,89,30,10,22,];
let num1 = numbers0.filter((num)=>{
    return num >= 45;
});
console.log(num1);

// task 3

let nums = [2, 5, 8, 11, 14, 17, 20];
let res = nums.filter((param)=>{
    return param % 2 === 0;
});
console.log(res);

// task 4

let num2 = [2,3,4,5,6,8,7,62,33,44,]
let res1 = num2.filter((params)=>{
    return params % 2 !== 0;
});
console.log(res1);

// task 5

let names = ["Aisha", "Rahul", "Amit", "Anjali", "Sneha"];
let res2 = names.filter((param)=>{
    return param .length >= 5;
});
console.log(res2);

// task 6

let name = ["virat","anjali","riya","Sneha","rahul","siya","priya"];
let res3 = name.filter((param)=>{
    return param .length >= 5;
});
console.log(res3);

// task 7

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 300 },
    { name: "Keyboard", price: 700 },
    { name: "USB", price: 200 },
    { name: "Monitor", price: 5000 }
];

let result = products.filter((pro)=>{
  return pro.price >= 500;
});
console.log(result);

// task 8
let students = [
    { name: "Aisha", marks: 80 },
    { name: "Rahul", marks: 35 },
    { name: "Priya", marks: 65 },
    { name: "Amit", marks: 25 },
    { name: "Sneha", marks: 90 }
];
let result1 = students.filter((std)=>{
    return std.marks >= 60;
});
console.log(result1);

// task 9

let cars = [
    { name: "BMW", price: 5000000 },
    { name: "Swift", price: 600000 },
    { name: "Range Rover", price: 10000000 },
    { name: "Jaguar", price: 7000000 },
    { name: "Thar", price: 1500000 }
];
let result2 = cars.filter((car)=>{
    return car.price >= 1500000;
});
console.log(result2);


let cars1 = [
    { name: "BMW", price: 5000000, mileage: 12 },
    { name: "Swift", price: 600000, mileage: 22 },
    { name: "Range Rover", price: 10000000, mileage: 8 },
    { name: "Jaguar", price: 7000000, mileage: 15 },
    { name: "Thar", price: 1500000, mileage: 10 }
];
let result3 = cars1.filter((car)=>{
   return car.price >= 1500000 && car.mileage >= 12;
});
console.log(result3);

var companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },   
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
let result4 = [];
for(let i = 0; i < companies.length; i++){
    if(companies[i].category.toLowerCase().trim() === 'retail'){
        result4.push(companies[i]);
    }
}
console.log(result4);

let result5 = [];
for(let i = 0; i < companies.length; i++){
    if(companies[i].category.toLowerCase().indexOf('retail')>-1){
        result5.push(companies[i]);
    }
}
console.log(result5);

let result6 = [];
for(let i = 0; i < companies.length; i++){
    if(companies[i].category.toLowerCase().includes('retail')){
        result6.push(companies[i]);
    }
}
console.log(result6);

let result7 = [];
companies.forEach((comp)=>{
    if(comp.category.toLowerCase().trim() === 'retail'){
        result7.push(comp);
    }
});
console.log(result7)

let result8 = [];
companies.forEach((comp)=>{
    if(comp.category.toLowerCase().indexOf('retail')>-1){
        result8.push(comp);
    }
});
console.log(result8)

let result9 = [];
companies.forEach((comp)=>{
    if(comp.category.toLowerCase().includes('retail')){
        result9.push(comp);
    }
});
console.log(result9)

let result10 = companies.filter((params)=>{
    return params.category.toLowerCase().trim() === 'retail';
});
console.log(result10)

let result0 = companies.filter((comp)=>{
    return comp.start >= 1980 && comp.start <= 1989;
});
console.log(result0);

let result00 = companies.filter((param)=>{
    return (param.end - param.start >= 10);
});
console.log(result00);
