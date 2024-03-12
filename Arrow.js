//Q3-Sum of all numbers in an Array
var sum=(arr)=>{
    var sums=0;
    for(var i=0;i<arr.length;i++)
    {
      sums+=arr[i];
    }
    return sums;
  }
  console.log(sum([1,2,3]));