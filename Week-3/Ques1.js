//  Create a memoize function that remembers previous inputs and stores them in cache so that itwon’t have to compute the same inputs more than once. The function will take an unspecifiednumber of integer inputs and a reducer method

// Memoization is an optimisation technique that is used to reduce the time-consuming calculations by saving the previous input value results in something called cache and returning the result from it .

// Example

const fib=(n)=>
{
 if(n<2)
 {
    return n;
 }
 return fib(n-1)+fib(n-2);
}

const memoize=(func)=>
{
    let cache={};
    return function (...arg)
    {
       let n=arg[0];
       if(n in cache)
       {
        return cache[n];
       }
       else{
        let result=fib(n)
        cache[n]=result;
        return result;
       }
    }
}
console.time()
// const efficient=memoize(fib)
// console.log(efficient(40))
console.log(fib(38));
console.timeEnd();

console.time()
console.log(efficient(40))
console.timeEnd();
