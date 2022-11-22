// find the elemnt in the arr using bs

function findElem(s,e,x,arr)
{
    while(s<=e)
    {
        let mid=Math.floor((s+e)/2);
        if(arr[mid]===x)
        {
           return mid;
        }
        else if(arr[mid]<x)
        {
            return findElem(mid+1,e,x,arr)
        }
        else
        {
           return findElem(s,mid-1,x,arr)
        }
    }
  

}







let arr=[2,3,4,5,6,7,8,9]
let x=7
console.log(findElem(0,arr.length,x,arr));