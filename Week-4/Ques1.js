 function reverseString(s) {
    let arr=[]
    for(let i=s.length-1;i>=0;i--)
        {
            arr.push(s[i])
        }
    return arr;
    
};
console.log(reverseString([1,2,3]));