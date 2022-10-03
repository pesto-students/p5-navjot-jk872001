// Object.getPrototypeOf()
// const prototype1 = {};
// const object1 = Object.create(prototype1);

// console.log(Object.getPrototypeOf(object1) === prototype1);
// console.log(Object.getPrototypeOf(object1));

// let obj={};
// console.log(obj.toString);
// console.log(obj.hasOwnProperty);

// Overinding
// let obj1={
//     toString: function (){
//         return "my-to-string"
//     }
// };
// console.log(obj1.toString());

// Cretaing obj2 which has the properties of obj1
// let obj1={
//     name:"Jitesh"
// }
// let obj2=Object.create(obj1);  //method1
// let obj2={};
// Object.setPrototypeOf(obj2,obj1)   //method2

// obj2._proto_=obj1  //method3    -->Not working

// console.log(obj2);
// console.log(obj2.name);

// Construction Function --> Special type of function that is used to create object with the help of this keyword
// function one()
// {
//    this.a=32;
// }
// console.log(one()); //normal func call
// console.log(new one()); //constructer func call


// we can also over-write
// function one ()
// {
//    this.a=32;
//    return {a:43}
// }
// console.log(one()); //normal func call
// console.log(new one()); //constructer func call

// Another Example
// function one(name,age)
// {
//     if(!new.target)
//     {
//         throw new Error ("should use new keyword")
//     }
//     this.name=name;
//     this.age=age;
//     // return 343534;   but if in return there is a object then it will return the object
//     return {greet:"Hello"}
// }

// console.log(new one("Preeti",25))

// ES6 syntex
// class one {
//     constructor(name,age)
//     {
//         this.name=name;
//         this.age=age;
//     }
// }

// console.log(new one("Preeti",25))

// Questions
// function Person(){}
// const p=new Person();

// console.log(Object.getPrototypeOf(p)===Person.prototype);
// console.log(Object.getPrototypeOf(Person)===Function.prototype);
// console.log(Object.getPrototypeOf(Object)===Function.prototype);
// console.log(Object.getPrototypeOf(Function.prototype)===Object.prototype);
// console.log(Object.getPrototypeOf(Object.prototype)=== null);
// console.log(Object.getPrototypeOf(Function)===Function.prototype);

// Classes with es6 syntax

// class Person{
//     constructor(name)
//     {
//         this.name=name;
//     }
//     printName(){
//         console.log(this.name);
//     }
// }

// class Employee extends Person {
//     constructor(name,id)
//     {
//         super(name)
//         this.id=id;
//         return {}  //overiding
//     }
//     printId(){
//         console.log(this.id);
//     }
// }

// const e = new Employee("Jitesh",21);
// console.log(e);
// e.printName();
// e.printId();

// object descripters (another way of writing the object)

// const obj={
//     // 50% --> for accessing the property
//     get name()
//     {
//         return "Jitesh"
//     },
//     // 50% --> for changing the value
//     set name(value)
//     {
//         return value;
//     }
// }

// console.log(obj.name);
// obj.name="Goldy";
// console.log(obj.name); // ?????????

// object property attributes
// const obj={
//     car:"Thar"
// }
// console.log(Object.getOwnPropertyDescriptors(obj,"car"));
// console.log(Object.getOwnPropertyDescriptors(obj));

// modifying the attributes

// const obj={};

// // default e,w,c is true in this case
// obj.age=21

// Object.defineProperty(obj,"name",{
//     value:"jitesh",
//     // default is false
//     enumerable:true,
//     writable:true,
//     configurable:true
// })
// console.log(obj);

// obj.name="Goldy"
// console.log(obj);

// console.log(delete obj.name)


// rest and spread
// rest--> combine
// spread --> opposite of rest
// both of them them perform on arr and obj

// es6 rest
// function add(a,b,c,...rest)
// {
//     // console.log(rest);  //left elements
//    return a+b+c
// }
// console.log(add(2,5,6,3,5,7))

// spread
// let name=["a","b","c"]
// let name2=[...name,"d"]
// console.log(...name2)

// spread in object
// let obj1={
//     p1:"add"
// }
// let obj2={
//     ...obj1,
//     p2:"mul"
// }
// console.log(obj2)

// Promises

// const p= new Promise ((resolve,reject)=>
// {
//     setTimeout(()=>
//     {
//        resolve("Promise")
//     },1000)
// })

// p.then((resolve)=>console.log("then -"+resolve)).catch((reject)=>console.log("catch -"+reject)).finally((result)=>console.log("finally -"+result))
// why finally is not printing 

// we can call the then (consumer function) anytime 

// p.then((resolve)=>
// {
//     setTimeout(()=>
//     {
//       console.log(resolve)
//     },3000)
// })

//! Promise Chaning

// const delay=(ms)=> new Promise((resolve,reject)=>
// {  
//     setTimeout(()=>
//     {
//       resolve(10);
//     },ms)
// })

// delay(3000).then((num)=> 
// {
//     return num**2 //! 100   //we can also use delay(2000) here
// }
// ).then((num)=>
// {
//     return num/2 //! 50
// }).then(console.log)

//! Promise.resolve

// Promise.resolve([1,2,3]).then(console.log)

//! Promise.all
// const sleep=(ms,value)=> new Promise((resolve)=>
// {
//     setTimeout(()=>{
//         resolve(value)
//     },ms)
// })

// Promise.all([sleep(2000,"a"),sleep(3000,"b"),sleep(4000,"c")]).then(console.log)

//! Symbols
// let x= Symbol("Hello")  // value inside the symbol is known as identifier
// let y= Symbol("Hello")
// console.log(x==y);
// console.log(typeof x)
// console.log(x.toString())
// console.log(x.description)

// Symbol in Object
// let age=Symbol("age")
// const obj={
//     name:"Jitesh",
//     [age]:21
// }
// console.log(obj)
// console.log(obj[age])
// for in loop and JSON.stringify both skip the value of symbol

//! Iterators 
// It give us more control on iteration the value

const arr=[100,200,300]
const y =arr[Symbol.iterator]();
// y.next();
// console.log("No effect")
// console.log(y.next());

// loop in iterators
let result= y.next();
while(!result.done)
{
    console.log(result.value)
    result = y.next();
}

