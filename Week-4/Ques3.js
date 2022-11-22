
let fibObj = { 

one: 0, 
two: 1, 
temp: 0, 

 [Symbol.iterator](){ 
    return this; 
 }, 

next(){ 
    this.temp = this.two; 
    this.two = this.temp + this.one; 
    this.one = this.temp; 
    return {value: this.two} 
} 
} 

for(let I = 0 ; I < 6; I++){ 
   console.log(fibObj.next().value) //1,2,3,5,8..... 
} 


// function *fibonacci(){
//     let a = 0;
//     let b = 1;
    
//     while(true){
//         let current = a;
//         a=b;
//         b= current + a;
//         yield current;
//     }
// }

// const fib = fibonacci();

// console.log(fib.next());
// console.log(fib.next());
// console.log(fib.next());
// console.log(fib.next());
// console.log(fib.next());
// console.log(fib.next());
// console.log(fib.next());
// console.log(fib.next());